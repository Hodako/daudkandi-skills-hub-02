
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    mobile: '',
    email: '',
    address: '',
    birthCertificate: '',
    currentStatus: '',
    photo: null as File | null,
    idCard: null as File | null,
    additionalDocs: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }));
  };

  const submitToTelegram = async () => {
    const botToken = '7969896829:AAGcCKbm6rlowsmm20BbIxnYkG2WN-plcRw';
    const chatId = '7527362377';
    
    const message = `
🎓 NEW APPLICATION - TTC Daudkandi Graphics Lab

👤 Personal Information:
• Full Name: ${formData.fullName}
• Father's Name: ${formData.fatherName}
• Mother's Name: ${formData.motherName}
• Mobile: ${formData.mobile}
• Email: ${formData.email}

📍 Address: ${formData.address}

📋 Details:
• Birth Certificate No: ${formData.birthCertificate}
• Current Status: ${formData.currentStatus}

📅 Applied: ${new Date().toLocaleString()}
    `;

    try {
      // Send text message
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Send files if available
      if (formData.photo) {
        await sendFileToTelegram(botToken, chatId, formData.photo, 'photo', 'Photo');
      }
      if (formData.idCard) {
        await sendFileToTelegram(botToken, chatId, formData.idCard, 'document', 'ID Card');
      }
      if (formData.additionalDocs) {
        await sendFileToTelegram(botToken, chatId, formData.additionalDocs, 'document', 'Additional Documents');
      }

      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      throw error;
    }
  };

  const sendFileToTelegram = async (botToken: string, chatId: string, file: File, type: string, caption: string) => {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append(type, file);
    formData.append('caption', caption);

    const endpoint = type === 'photo' ? 'sendPhoto' : 'sendDocument';
    
    await fetch(`https://api.telegram.org/bot${botToken}/${endpoint}`, {
      method: 'POST',
      body: formData,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToTelegram();
      
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "Your application has been sent to our admission team. We will contact you soon.",
      });

      // Reset form
      setFormData({
        fullName: '',
        fatherName: '',
        motherName: '',
        mobile: '',
        email: '',
        address: '',
        birthCertificate: '',
        currentStatus: '',
        photo: null,
        idCard: null,
        additionalDocs: null,
      });

      // Reset file inputs
      const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
      fileInputs.forEach(input => input.value = '');

    } catch (error) {
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
    <section id="apply-now" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <i className="fas fa-file-alt mr-3 text-green-600"></i>
              Apply for Admission
            </h2>
            <p className="text-xl text-gray-600">
              Join our Graphics Design course and start your journey to professional excellence
            </p>
          </div>

          <Card className="glass-effect hover-lift">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <i className="fas fa-graduation-cap mr-3"></i>
                Application Form - TTC Daudkandi Graphics Lab
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center mb-2">
                      <i className="fas fa-user mr-2 text-green-600"></i>
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="flex items-center mb-2">
                      <i className="fas fa-phone mr-2 text-green-600"></i>
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fatherName" className="flex items-center mb-2">
                      <i className="fas fa-male mr-2 text-green-600"></i>
                      Father's Name *
                    </Label>
                    <Input
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motherName" className="flex items-center mb-2">
                      <i className="fas fa-female mr-2 text-green-600"></i>
                      Mother's Name *
                    </Label>
                    <Input
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="flex items-center mb-2">
                      <i className="fas fa-envelope mr-2 text-green-600"></i>
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthCertificate" className="flex items-center mb-2">
                      <i className="fas fa-id-card mr-2 text-green-600"></i>
                      Birth Certificate Number *
                    </Label>
                    <Input
                      id="birthCertificate"
                      name="birthCertificate"
                      value={formData.birthCertificate}
                      onChange={handleInputChange}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="flex items-center mb-2">
                    <i className="fas fa-home mr-2 text-green-600"></i>
                    Full Address *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>

                <div>
                  <Label htmlFor="currentStatus" className="flex items-center mb-2">
                    <i className="fas fa-briefcase mr-2 text-green-600"></i>
                    Current Status (Student/Employed/Unemployed) *
                  </Label>
                  <Input
                    id="currentStatus"
                    name="currentStatus"
                    value={formData.currentStatus}
                    onChange={handleInputChange}
                    required
                    className="border-green-200 focus:border-green-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="photo" className="flex items-center mb-2">
                      <i className="fas fa-camera mr-2 text-green-600"></i>
                      Photo *
                    </Label>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'photo')}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="idCard" className="flex items-center mb-2">
                      <i className="fas fa-id-badge mr-2 text-green-600"></i>
                      ID Card/NID *
                    </Label>
                    <Input
                      id="idCard"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, 'idCard')}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalDocs" className="flex items-center mb-2">
                      <i className="fas fa-file-upload mr-2 text-green-600"></i>
                      Additional Documents
                    </Label>
                    <Input
                      id="additionalDocs"
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileChange(e, 'additionalDocs')}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 text-lg pulse-glow"
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
