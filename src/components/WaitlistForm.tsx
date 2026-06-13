import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

interface WaitlistFormProps {
  variant?: 'light' | 'dark';
}

export function WaitlistForm({ variant = 'light' }: WaitlistFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userType, setUserType] = useState('landlord');
  const [propertyCount, setPropertyCount] = useState('1-10');
  const [mainChallenge, setMainChallenge] = useState('');

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const waitlistRef = doc(collection(db, 'waitlist'));
      const payload: any = {
        fullName,
        email,
        phoneNumber,
        userType,
        propertyCount,
        timestamp: serverTimestamp()
      };
      if (companyName.trim()) payload.companyName = companyName.trim();
      if (mainChallenge.trim()) payload.mainChallenge = mainChallenge.trim();

      await setDoc(waitlistRef, payload);
      setIsSuccess(true);
    } catch (err: any) {
      // If it's our custom JSON error string, we can try parsing it or just display a generic user error
      try {
        const parsed = JSON.parse(err.message);
        setError("Unable to submit. Please ensure all required fields are correct.");
      } catch {
        setError(err.message || "An unexpected error occurred.");
      }
      handleFirestoreError(err, OperationType.CREATE, 'waitlist');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl border focus:ring-2 outline-none transition-all ${
    variant === 'dark' 
      ? 'border-slate-800 focus:border-white focus:ring-slate-700 placeholder:text-slate-500 bg-slate-900 text-white' 
      : 'border-slate-300 focus:border-black focus:ring-slate-200 placeholder:text-slate-400 bg-white text-slate-900'
  }`;

  const labelClasses = `block text-sm font-medium mb-1.5 ${variant === 'dark' ? 'text-slate-300' : 'text-slate-700'}`;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`flex flex-col items-center justify-center p-8 ${
              variant === 'dark' 
                ? 'bg-black backdrop-blur border border-slate-800 text-white rounded-2xl shadow-lg' 
                : 'bg-white border border-slate-200 rounded-2xl shadow-sm text-center'
            }`}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                variant === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-black'
              }`}
            >
              <CheckCircle2 className="w-8 h-8" />
            </motion.div>
            <h3 className={`font-display font-semibold text-xl mb-2 ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              You're on the list!
            </h3>
            <p className={`${variant === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Thanks for sharing your details. We'll notify you as soon as Spaceya is ready for early access.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleFinalSubmit}
            className={`flex flex-col gap-4 p-6 sm:p-8 text-left ${
              variant === 'dark' 
                ? 'bg-black border border-slate-800 rounded-2xl shadow-lg w-full' 
                : 'bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 w-full'
            }`}
          >
            <div className="text-center mb-2">
              <h3 className={`font-display font-semibold text-xl ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Early Access Registration Form
              </h3>
              <p className={`text-sm mt-1 border-b pb-4 ${variant === 'dark' ? 'text-slate-400 border-slate-800' : 'text-slate-500 border-slate-100'}`}>
                Tell us a bit about your property business to secure your spot.
              </p>
            </div>

            {error && (
              <div className="p-3 mb-2 text-sm font-medium rounded-lg bg-red-50 text-red-600 border border-red-200 text-center">
                {error}
              </div>
            )}

            <div>
              <label className={labelClasses}>Full Name</label>
              <input type="text" required value={fullName} onChange={e => setFullName(e.target.value)} className={inputClasses} placeholder="John Doe" />
            </div>

            <div>
              <label className={labelClasses}>Email Address</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className={inputClasses} placeholder="john@example.com" />
            </div>

            <div>
              <label className={labelClasses}>Phone Number</label>
              <input type="tel" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className={inputClasses} placeholder="+234..." />
            </div>

            <div>
              <label className={labelClasses}>Company Name</label>
              <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} className={inputClasses} placeholder="Spaceya Properties Ltd." />
            </div>

            <div>
              <label className={labelClasses}>Are You A?</label>
              <select value={userType} onChange={e => setUserType(e.target.value)} className={inputClasses} required>
                <option value="landlord">Landlord</option>
                <option value="property_manager">Property Manager</option>
                <option value="agency">Real Estate Agency</option>
                <option value="developer">Estate Developer</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>How Many Properties Do You Manage?</label>
              <select value={propertyCount} onChange={e => setPropertyCount(e.target.value)} className={inputClasses} required>
                <option value="1-10">1 to 10</option>
                <option value="11-50">11 to 50</option>
                <option value="51-100">51 to 100</option>
                <option value="100+">100+</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>What Is Your Biggest Property Management Challenge?</label>
              <textarea 
                value={mainChallenge} 
                onChange={e => setMainChallenge(e.target.value)} 
                className={`${inputClasses} resize-none h-24`} 
                placeholder="Share your challenges..."
              />
            </div>

            <div className="mt-4 flex gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 font-bold rounded-xl transition-all ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-[0.98]'
                } ${
                  variant === 'dark'
                    ? 'bg-white text-black hover:bg-slate-200'
                    : 'bg-black hover:bg-slate-800 text-white'
                }`}
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
