import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, CheckCircle, MessageSquare, Phone, Clock, ArrowDown, Zap } from "lucide-react";

const AIAppointmentBooking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", businessType: "", date: "", time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) setSubmitted(true);
  };

  const timelineSteps = [
    { icon: CalendarDays, title: "Lead Submits Booking", desc: "Client fills out the booking form with their details and preferred time.", color: "text-primary" },
    { icon: CheckCircle, title: "AI Confirmation Message", desc: "Instant confirmation email & SMS sent automatically via CRM integration.", color: "text-green-500" },
    { icon: Phone, title: "SMS Reminder Before Appointment", desc: "Automated reminder sent 24 hours and 1 hour before the scheduled meeting.", color: "text-accent" },
    { icon: MessageSquare, title: "Post-Meeting Follow-Up", desc: "AI sends a personalized follow-up message with next steps and resources.", color: "text-purple-500" },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <CalendarDays className="w-4 h-4" />
          Demo Tool #1
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Appointment Booking & Follow-Up Engine</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">See how AI automates the entire appointment lifecycle — from booking to follow-up — saving hours of manual work.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Booking Form */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CalendarDays className="w-5 h-5 text-primary" /> Book an Appointment</CardTitle>
            <CardDescription>Try the demo booking form below</CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input placeholder="John Doe" value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input placeholder="+1 (555) 000-0000" value={formData.phone} onChange={e => setFormData(p => ({...p, phone: e.target.value}))} />
                  </div>
                  <div className="space-y-2">
                    <Label>Business Type</Label>
                    <Select onValueChange={v => setFormData(p => ({...p, businessType: v}))}>
                      <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dental">Dental Clinic</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        <SelectItem value="agency">Marketing Agency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Input type="date" value={formData.date} onChange={e => setFormData(p => ({...p, date: e.target.value}))} />
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <Select onValueChange={v => setFormData(p => ({...p, time: v}))}>
                      <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9am">9:00 AM</SelectItem>
                        <SelectItem value="10am">10:00 AM</SelectItem>
                        <SelectItem value="11am">11:00 AM</SelectItem>
                        <SelectItem value="1pm">1:00 PM</SelectItem>
                        <SelectItem value="2pm">2:00 PM</SelectItem>
                        <SelectItem value="3pm">3:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="w-full btn-glow">
                  <Zap className="w-4 h-4 mr-2" /> Submit Booking Request
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Appointment Confirmed!</h3>
                <p className="text-muted-foreground">Hi <span className="font-medium text-foreground">{formData.name}</span>, your appointment request has been received. In a real system, you'd receive an instant confirmation via email and SMS.</p>
                <div className="bg-muted/50 rounded-lg p-4 text-left space-y-2 text-sm">
                  <p><span className="font-medium">📧 Confirmation email</span> → Sent instantly</p>
                  <p><span className="font-medium">📱 SMS confirmation</span> → Sent in 30 seconds</p>
                  <p><span className="font-medium">📅 Calendar invite</span> → Added to CRM</p>
                  <p><span className="font-medium">🔔 Reminder</span> → Scheduled for 24hrs before</p>
                </div>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Try Again</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Automation Timeline */}
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /> Automation Timeline</CardTitle>
            <CardDescription>What happens behind the scenes after a booking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {timelineSteps.map((step, i) => (
                <div key={i}>
                  <div className="flex gap-4 items-start">
                    <div className={`w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 ${step.color}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="ml-5 my-2 flex items-center">
                      <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">💡 Integration Ready:</span> This system connects with GoHighLevel, Calendly, Google Calendar, Twilio, and any CRM via API or n8n workflows.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIAppointmentBooking;
