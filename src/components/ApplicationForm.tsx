import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    mobileNumber: '',
    email: '',
    address: '',
    currentStatus: '',
    documentType: 'nid', // 'nid' or 'birth'
    documentNumber: '',
    photo: null as File | null,
    identityDocument: null as File | null,
    educationalCertificate: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({
    photo: 0,
    identityDocument: 0,
    educationalCertificate: 0,
  });
  const [submissionProgress, setSubmissionProgress] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    checkFormCompletion();
  };

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        const maxWidth = 800;
        const maxHeight = 600;
        let { width, height } = img;
        
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          } else {
            resolve(file);
          }
        }, 'image/jpeg', 0.8);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, files } = e.target;

  if (files && files.length > 0) {
    const originalFile = files[0];

    // Compress if it's an image
    const processedFile = originalFile.type.startsWith('image/')
      ? await compressImage(originalFile)
      : originalFile;

    // Set the file in state
    setFormData(prev => ({ ...prev, [name]: processedFile }));

    // Simulate upload
    simulateImageUpload(name, processedFile);

    // 🛠️ এখন input রিসেট কর
    e.target.value = '';
  }
};




  const simulateImageUpload = (fieldName: string, file: File) => {
    setUploadProgress(prev => ({ ...prev, [fieldName]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev[fieldName as keyof typeof prev] + 20;
        if (newProgress >= 100) {
          clearInterval(interval);
          checkFormCompletion();
          return { ...prev, [fieldName]: 100 };
        }
        return { ...prev, [fieldName]: newProgress };
      });
    }, 50); // Faster upload simulation
  };

  const checkFormCompletion = () => {
    const requiredFields = [
      'fullName', 'fatherName', 'motherName', 'dateOfBirth', 
      'mobileNumber', 'email', 'address', 'currentStatus', 
      'documentNumber'
    ];
    
    const requiredFiles = ['photo', 'identityDocument', 'educationalCertificate'];
    
    const fieldsComplete = requiredFields.every(field => formData[field as keyof typeof formData]);
    const filesComplete = requiredFiles.every(field => formData[field as keyof typeof formData]);
    const uploadsComplete = requiredFiles.every(field => uploadProgress[field as keyof typeof uploadProgress] === 100);
    
    setCanSubmit(fieldsComplete && filesComplete && uploadsComplete);
  };

  const getUserIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error getting IP:', error);
      return 'Unknown';
    }
  };

  const sendImageToTelegram = async (file: File, description: string): Promise<boolean> => {
    try {
      const formData = new FormData();
      formData.append('chat_id', '7527362377');
      formData.append('photo', file);
      formData.append('caption', description);

      const response = await fetch(`https://api.telegram.org/bot7969896829:AAGcCKbm6rlowsmm20BbIxnYkG2WN-plcRw/sendPhoto`, {
        method: 'POST',
        body: formData,
      });

      return response.ok;
    } catch (error) {
      console.error('Error sending image to Telegram:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!canSubmit) {
      toast({
        title: "Form Incomplete",
        description: "Please fill all required fields and upload all documents.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmissionProgress(0);
    
    try {
      // Get user IP
      const userIP = await getUserIP();
      setSubmissionProgress(10);

      const documentTypeText = formData.documentType === 'nid' ? 'NID Number' : 'Birth Certificate Number';
      
      // Send text data first
      const message = `
🎓 NEW APPLICATION - TTC Daudkandi Graphics Lab

👤 Personal Information:
• Name: ${formData.fullName}
• Father: ${formData.fatherName}
• Mother: ${formData.motherName}
• Date of Birth: ${formData.dateOfBirth}
• Mobile: ${formData.mobileNumber}
• Email: ${formData.email}
• Address: ${formData.address}
• Current Status: ${formData.currentStatus}

📋 Documents:
• ${documentTypeText}: ${formData.documentNumber}
• User IP Address: ${userIP}

📅 Application Date: ${new Date().toLocaleString()}

📸 Images will be sent separately below.
      `;

      setSubmissionProgress(30);

      const textResponse = await fetch(`https://api.telegram.org/bot7969896829:AAGcCKbm6rlowsmm20BbIxnYkG2WN-plcRw/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '7527362377',
          text: message,
          parse_mode: 'HTML'
        }),
      });

      setSubmissionProgress(50);

      // Send images
      if (formData.photo) {
        await sendImageToTelegram(formData.photo, `📸 Photo - ${formData.fullName}`);
        setSubmissionProgress(65);
      }

      if (formData.identityDocument) {
        const docType = formData.documentType === 'nid' ? 'NID Card' : 'Birth Certificate';
        await sendImageToTelegram(formData.identityDocument, `📄 ${docType} - ${formData.fullName}`);
        setSubmissionProgress(80);
      }

      if (formData.educationalCertificate) {
        await sendImageToTelegram(formData.educationalCertificate, `🎓 Educational Certificate - ${formData.fullName}`);
        setSubmissionProgress(95);
      }

      setSubmissionProgress(100);

      if (textResponse.ok) {
        toast({
          title: "Application Submitted Successfully! 🎉",
          description: "Your complete application with all documents has been received. We will contact you soon.",
        });
        
        // Reset form
        setFormData({
          fullName: '',
          fatherName: '',
          motherName: '',
          dateOfBirth: '',
          mobileNumber: '',
          email: '',
          address: '',
          currentStatus: '',
          documentType: 'nid',
          documentNumber: '',
          photo: null,
          identityDocument: null,
          educationalCertificate: null,
        });
        setCanSubmit(false);
        setUploadProgress({ photo: 0, identityDocument: 0, educationalCertificate: 0 });
        setSubmissionProgress(0);
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply-now" className="py-8 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 font-roboto">
            Apply for Admission
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-cascadia">
            Fill out the form below to apply for our Graphics Design course
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border-0">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardTitle className="text-lg sm:text-2xl font-roboto text-center">
                Application Form - TTC Daudkandi Graphics Lab
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              {(submissionProgress > 0) && (
                <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-700 dark:text-blue-300 font-medium text-sm sm:text-base">
                      <i className="fas fa-cloud-upload-alt mr-2"></i>
                      {submissionProgress === 100 ? 'Application submitted successfully!' : 'Submitting application...'}
                    </span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-blue-600 dark:text-blue-400 mb-1">
                      <span>Submission Progress</span>
                      <span>{submissionProgress}%</span>
                    </div>
                    <Progress value={submissionProgress} className="w-full h-2" />
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-roboto">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Father's Name *
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Mother's Name *
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                      Current Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                      Current Status *
                    </label>
                    <select
                      name="currentStatus"
                      value={formData.currentStatus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select your current status</option>
                      <option value="student">Student</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="employed">Employed</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="business">Business Owner</option>
                    </select>
                  </div>
                </div>

                {/* Document Information */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-roboto">
                    Identity Document (Choose One)
                  </h3>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                      Document Type *
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="documentType"
                          value="nid"
                          checked={formData.documentType === 'nid'}
                          onChange={handleInputChange}
                          className="mr-2"
                          disabled={isSubmitting}
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">NID Card</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="documentType"
                          value="birth"
                          checked={formData.documentType === 'birth'}
                          onChange={handleInputChange}
                          className="mr-2"
                          disabled={isSubmitting}
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">Birth Certificate</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                      {formData.documentType === 'nid' ? 'NID Number' : 'Birth Certificate Number'} *
                    </label>
                    <input
                      type="text"
                      name="documentNumber"
                      value={formData.documentNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Document Uploads */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-roboto">
                    Required Documents
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Upload Photo *
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="file"
                          name="photo"
                          onChange={handleFileChange}
                          accept="image/*"
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                          required
                          disabled={isSubmitting}
                        />
                        {uploadProgress.photo > 0 && uploadProgress.photo < 100 && (
                          <i className="fas fa-spinner fa-spin text-blue-500"></i>
                        )}
                        {uploadProgress.photo === 100 && (
                          <i className="fas fa-check-circle text-green-500"></i>
                        )}
                      </div>
                      {uploadProgress.photo > 0 && uploadProgress.photo < 100 && (
                        <div className="mt-2">
                          <Progress value={uploadProgress.photo} className="w-full h-2" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{uploadProgress.photo}%</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Upload {formData.documentType === 'nid' ? 'NID Card' : 'Birth Certificate'} *
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="file"
                          name="identityDocument"
                          onChange={handleFileChange}
                          accept="image/*,.pdf"
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                          required
                          disabled={isSubmitting}
                        />
                        {uploadProgress.identityDocument > 0 && uploadProgress.identityDocument < 100 && (
                          <i className="fas fa-spinner fa-spin text-blue-500"></i>
                        )}
                        {uploadProgress.identityDocument === 100 && (
                          <i className="fas fa-check-circle text-green-500"></i>
                        )}
                      </div>
                      {uploadProgress.identityDocument > 0 && uploadProgress.identityDocument < 100 && (
                        <div className="mt-2">
                          <Progress value={uploadProgress.identityDocument} className="w-full h-2" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{uploadProgress.identityDocument}%</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm">
                        Upload Educational Certificate *
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="file"
                          name="educationalCertificate"
                          onChange={handleFileChange}
                          accept="image/*,.pdf"
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white text-sm"
                          required
                          disabled={isSubmitting}
                        />
                        {uploadProgress.educationalCertificate > 0 && uploadProgress.educationalCertificate < 100 && (
                          <i className="fas fa-spinner fa-spin text-blue-500"></i>
                        )}
                        {uploadProgress.educationalCertificate === 100 && (
                          <i className="fas fa-check-circle text-green-500"></i>
                        )}
                      </div>
                      {uploadProgress.educationalCertificate > 0 && uploadProgress.educationalCertificate < 100 && (
                        <div className="mt-2">
                          <Progress value={uploadProgress.educationalCertificate} className="w-full h-2" />
                          <span className="text-xs text-gray-500 dark:text-gray-400">{uploadProgress.educationalCertificate}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-sm sm:text-base font-roboto shadow-lg transform transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting || !canSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Submit Application
                      </>
                    )}
                  </Button>
                  
                  {!canSubmit && !isSubmitting && (
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Please fill all fields and upload all documents to submit
                    </p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
