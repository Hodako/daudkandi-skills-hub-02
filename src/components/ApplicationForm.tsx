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
    birthCertificateNumber: '',
    nidNumber: '',
    photo: null as File | null,
    nidCard: null as File | null,
    birthCertificate: null as File | null,
    educationalCertificate: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      simulateImageUpload(name, files[0]);
    }
  };

  const simulateImageUpload = (fieldName: string, file: File) => {
    setUploadStatus(`Uploading ${fieldName}...`);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus(`${fieldName} uploaded successfully!`);
          checkAllImagesUploaded();
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const checkAllImagesUploaded = () => {
    const requiredFiles = ['photo', 'nidCard', 'birthCertificate', 'educationalCertificate'];
    const uploadedFiles = requiredFiles.filter(field => formData[field as keyof typeof formData]);
    
    if (uploadedFiles.length === requiredFiles.length) {
      setCanSubmit(true);
      setUploadStatus('All images uploaded successfully! You can now submit your application.');
    }
  };

  const validateForm = () => {
    const requiredFields = [
      'fullName', 'fatherName', 'motherName', 'dateOfBirth', 
      'mobileNumber', 'email', 'address', 'currentStatus', 
      'birthCertificateNumber', 'nidNumber'
    ];
    
    const requiredFiles = ['photo', 'nidCard', 'birthCertificate', 'educationalCertificate'];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    const missingFiles = requiredFiles.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0 || missingFiles.length > 0) {
      const missingItems = [...missingFields, ...missingFiles.map(f => `${f} file`)];
      toast({
        title: "Missing Required Information",
        description: `Please provide: ${missingItems.join(', ')}`,
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || !canSubmit) {
      toast({
        title: "Cannot Submit",
        description: "Please upload all required images before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setUploadStatus('Submitting application...');
    
    try {
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
• Birth Certificate No: ${formData.birthCertificateNumber}
• NID Number: ${formData.nidNumber}
• Photo: ${formData.photo ? '✅ Uploaded' : '❌ Missing'}
• NID Card: ${formData.nidCard ? '✅ Uploaded' : '❌ Missing'}
• Birth Certificate: ${formData.birthCertificate ? '✅ Uploaded' : '❌ Missing'}
• Educational Certificate: ${formData.educationalCertificate ? '✅ Uploaded' : '❌ Missing'}

📅 Application Date: ${new Date().toLocaleString()}
      `;

      const response = await fetch(`https://api.telegram.org/bot7969896829:AAGcCKbm6rlowsmm20BbIxnYkG2WN-plcRw/sendMessage`, {
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

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully! 🎉",
          description: "Your application has been received. We will contact you soon.",
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
          birthCertificateNumber: '',
          nidNumber: '',
          photo: null,
          nidCard: null,
          birthCertificate: null,
          educationalCertificate: null,
        });
        setCanSubmit(false);
        setUploadStatus('');
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
    <section id="apply-now" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Apply for Admission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to apply for our Graphics Design course
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Application Form</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {uploadStatus && (
                <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-700 dark:text-blue-300 font-medium">
                      <i className="fas fa-cloud-upload-alt mr-2"></i>
                      {uploadStatus}
                    </span>
                  </div>
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <Progress value={uploadProgress} className="w-full" />
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Mother's Name *
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Birth Certificate Number *
                    </label>
                    <input
                      type="text"
                      name="birthCertificateNumber"
                      value={formData.birthCertificateNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      NID Number *
                    </label>
                    <input
                      type="text"
                      name="nidNumber"
                      value={formData.nidNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Current Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Current Status *
                  </label>
                  <select
                    name="currentStatus"
                    value={formData.currentStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Upload Photo *
                    </label>
                    <input
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Upload NID Card *
                    </label>
                    <input
                      type="file"
                      name="nidCard"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Upload Birth Certificate *
                    </label>
                    <input
                      type="file"
                      name="birthCertificate"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Upload Educational Certificate *
                    </label>
                    <input
                      type="file"
                      name="educationalCertificate"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
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
