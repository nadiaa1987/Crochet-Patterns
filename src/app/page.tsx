"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Download, Scissors, Heart, ArrowRight, Star, ChevronDown } from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How many patterns can I download?",
      a: "As a member, you get unlimited access to our entire library. You can download as many patterns as you like, anytime."
    },
    {
      q: "Can I sell items made from these patterns?",
      a: "Yes! Every subscription includes a commercial license, meaning you can sell the finished physical products you make using our patterns."
    },
    {
      q: "What format are the patterns in?",
      a: "All patterns are available as high-quality PDF files that you can view on any device or print out."
    },
    {
      q: "How do I cancel my subscription?",
      a: "You can cancel your subscription at any time through your account dashboard with just one click. You will maintain access until the end of your billing period."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF9]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold font-playfair text-zinc-900">CrochetMagic</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600">
            <Link href="#patterns" className="hover:text-pink-500 transition-colors">Patterns</Link>
            <Link href="#pricing" className="hover:text-pink-500 transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-pink-500 transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-6">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left space-y-8">
                <Badge variant="outline" className="border-pink-200 text-pink-600 px-4 py-1 rounded-full bg-pink-50">
                  ✨ Unlimited Downloads
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-zinc-900 leading-tight">
                  Beautiful Crochet <span className="text-pink-600">Patterns</span> for Every Level
                </h1>
                <p className="text-xl text-zinc-600 max-w-2xl mx-auto lg:mx-0">
                  Access a growing library of hundreds of premium crochet patterns. From cozy blankets to cute amigurumi, get everything for just one simple monthly price.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-pink-200 w-full sm:w-auto">
                      Start Downloading Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="#patterns">
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto">
                      Browse Library
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 text-sm text-zinc-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center overflow-hidden">
                        <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="User" width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <p>Joined by <span className="font-bold text-zinc-900">2,000+</span> happy crocheters</p>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-xl">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-50" />
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-zinc-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1000&auto=format&fit=crop" 
                    alt="Crochet Sample" 
                    width={600} 
                    height={800} 
                    className="rounded-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-zinc-50 flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Download className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Last Download</p>
                      <p className="text-sm font-bold text-zinc-900">Amigurumi Bunny Pattern.pdf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white" id="patterns">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-playfair font-bold text-zinc-900">Everything You Need to Create</h2>
              <p className="text-lg text-zinc-600">Join our community and get instant access to premium features designed for crochet enthusiasts.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Unlimited Access",
                  desc: "Download as many patterns as you want. No credits, no limits, no hidden fees.",
                  icon: <Download className="h-8 w-8 text-pink-500" />,
                },
                {
                  title: "Expertly Crafted",
                  desc: "Every pattern is tested and includes high-quality photos and clear instructions.",
                  icon: <CheckCircle2 className="h-8 w-8 text-pink-500" />,
                },
                {
                  title: "New Weekly Drops",
                  desc: "We add 5-10 new trending patterns every week to keep your hooks busy.",
                  icon: <Heart className="h-8 w-8 text-pink-500" />,
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl border border-zinc-100 bg-[#FFFDF9] hover:shadow-xl transition-shadow">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-zinc-50" id="pricing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-zinc-100">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-12 lg:p-16 space-y-8">
                  <h2 className="text-3xl font-playfair font-bold text-zinc-900">Simple, Transparent Pricing</h2>
                  <p className="text-zinc-600">Join thousands of makers who save hundreds of dollars every month by switching to our unlimited library.</p>
                  <ul className="space-y-4">
                    {[
                      "Unlimited PDF pattern downloads",
                      "Exclusive video tutorials",
                      "Ad-free browsing experience",
                      "Community support forum",
                      "Commercial use license included",
                      "Cancel anytime, no questions asked"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-700">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-80 bg-zinc-900 p-12 lg:p-16 text-white flex flex-col justify-center items-center text-center space-y-6">
                  <div>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs mb-2">Monthly Plan</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold">$9.99</span>
                      <span className="text-zinc-400">/mo</span>
                    </div>
                  </div>
                  <Link href="/signup" className="w-full">
                    <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100 rounded-full h-14 text-lg font-bold">
                      Get Started
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    <span>7-day money back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white" id="faq">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-zinc-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border rounded-2xl overflow-hidden bg-[#FFFDF9]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-bold text-lg text-zinc-900">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-zinc-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-zinc-600 text-base leading-relaxed animate-in fade-in slide-in-from-top-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center space-y-8 bg-pink-600 rounded-[3rem] py-20 text-white shadow-2xl shadow-pink-200">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold">Ready to Start Your Next Project?</h2>
            <p className="text-xl text-pink-50 opacity-90 max-w-2xl mx-auto">
              Join our community today and get instant access to hundreds of premium patterns. Your creative journey starts here.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-zinc-100 rounded-full px-12 h-16 text-xl font-bold">
                Join Now for $9.99
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <Scissors className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold font-playfair text-zinc-900">CrochetMagic</span>
            </Link>
            <div className="flex space-x-8 text-sm text-zinc-500">
              <Link href="#" className="hover:text-pink-600">Privacy Policy</Link>
              <Link href="#" className="hover:text-pink-600">Terms of Service</Link>
              <Link href="#" className="hover:text-pink-600">Contact Us</Link>
            </div>
            <p className="text-sm text-zinc-400">© 2024 CrochetMagic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
