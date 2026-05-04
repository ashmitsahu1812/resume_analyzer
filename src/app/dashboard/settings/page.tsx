"use client";

import { motion } from "framer-motion";
import { User, Shield, Key, Bell, CreditCard, ExternalLink, Zap } from "lucide-react";

export default function SettingsPage() {
  const sections = [
    {
      title: "Profile Information",
      icon: User,
      description: "Manage your account identity and professional details.",
      fields: [
        { label: "Display Name", value: "Ashmit Sahu", type: "text" },
        { label: "Email Address", value: "ashmit@example.com", type: "email" },
        { label: "Professional Role", value: "Full Stack Engineer", type: "text" },
      ]
    },
    {
      title: "API Configuration",
      icon: Key,
      description: "Configure your neural engine parameters and access keys.",
      fields: [
        { label: "OpenAI API Key", value: "sk-••••••••••••••••••••", type: "password" },
        { label: "Analysis Model", value: "GPT-4o (Standard)", type: "select" },
      ]
    },
    {
      title: "Security & Access",
      icon: Shield,
      description: "Control your data residency and platform encryption settings.",
      fields: [
        { label: "Two-Factor Auth", value: "Enabled", type: "toggle" },
        { label: "Vault Encryption", value: "AES-256", type: "readonly" },
      ]
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <header className="border-b border-white/5 pb-10">
        <div className="mono text-primary mb-2 flex items-center gap-2">
            <Zap className="w-3 h-3" />
            System Configuration
        </div>
        <h1 className="text-5xl font-bold tracking-tighter font-heading">
          Platform <br /> Settings.
        </h1>
        <p className="text-white/40 max-w-md mt-4">
          Adjust your neural analysis parameters and manage your secure credential vault.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <section.icon className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold font-heading uppercase text-sm tracking-widest">{section.title}</h3>
                  <p className="text-[10px] text-white/20 mono">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {section.fields.map((field, j) => (
                  <div key={j} className="space-y-2">
                    <label className="mono text-[9px] text-white/30 uppercase">{field.label}</label>
                    <div className="px-6 py-4 bg-white/[0.02] border border-white/5 rounded-sm flex items-center justify-between group focus-within:border-primary/30 transition-all">
                      <span className="text-sm font-medium">{field.value}</span>
                      <button className="mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          
          <div className="pt-10 flex justify-end">
             <button className="px-12 py-5 button-primary rounded-sm text-xs uppercase tracking-[0.2em]">
                Save System State
             </button>
          </div>
        </div>

        <div className="space-y-8">
           <div className="p-1 border-b border-white/5 pb-4">
              <span className="mono text-[10px] text-white/20 uppercase tracking-widest">Billing & Tier</span>
           </div>
           <div className="p-8 rounded-xl glass border-primary/20 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                 <div className="flex items-center justify-between mb-8">
                    <span className="mono text-primary font-bold">Premium Tier</span>
                    <CreditCard className="w-5 h-5 text-primary" />
                 </div>
                 <h3 className="text-3xl font-bold font-heading mb-2">Executive</h3>
                 <p className="text-sm text-white/40 mb-8 leading-relaxed font-body">Your account is currently in the executive tier with unlimited neural matching capabilities.</p>
                 <button className="w-full py-4 button-secondary rounded-sm text-[10px] mono tracking-widest flex items-center justify-center gap-2 group">
                    Manage Subscription
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
              </div>
           </div>
           
           <div className="p-8 rounded-xl bg-rose-500/5 border border-rose-500/10 space-y-4">
              <h4 className="mono text-[10px] text-rose-500 font-bold">Danger Zone</h4>
              <p className="text-[10px] text-white/20">Permanently delete your account and all analyzed resume data from the vault.</p>
              <button className="w-full py-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-sm text-[10px] mono tracking-widest transition-colors font-bold">
                 Purge Data Archive
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
