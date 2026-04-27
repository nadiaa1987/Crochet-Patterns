"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Download, CreditCard, LogOut, Loader2, LayoutDashboard, Library, Heart } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
        setLoading(false);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-pink-600" />
      </div>
    );
  }

  const isSubscribed = userData?.subscription_status === "ACTIVE";

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Sidebar / Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Scissors className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold font-playfair text-zinc-900">CrochetMagic</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-zinc-600 hidden md:inline-block">
              Welcome, <span className="font-bold">{userData?.displayName || user?.email}</span>
            </span>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5 text-zinc-600" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <aside className="md:col-span-1 space-y-2">
            <Link href="/dashboard">
              <Button variant="secondary" className="w-full justify-start gap-3">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/patterns">
              <Button variant="ghost" className="w-full justify-start gap-3 text-zinc-600">
                <Library className="h-5 w-5" />
                Browse Patterns
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" className="w-full justify-start gap-3 text-zinc-600">
                <CreditCard className="h-5 w-5" />
                Subscription
              </Button>
            </Link>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Subscription Card */}
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <CardDescription>Subscription Status</CardDescription>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {isSubscribed ? "Premium Member" : "Free Plan"}
                    <Badge variant={isSubscribed ? "default" : "secondary"} className={isSubscribed ? "bg-green-500 hover:bg-green-600" : ""}>
                      {isSubscribed ? "Active" : "Inactive"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!isSubscribed && (
                    <div className="space-y-4">
                      <p className="text-sm text-zinc-600">Upgrade to get unlimited access to all crochet patterns.</p>
                      <Link href="/#pricing">
                        <Button className="w-full bg-pink-600 hover:bg-pink-700">Upgrade Now</Button>
                      </Link>
                    </div>
                  )}
                  {isSubscribed && (
                    <p className="text-sm text-zinc-600">You have full access to our pattern library.</p>
                  )}
                </CardContent>
              </Card>

              {/* Downloads Card */}
              <Card className="flex-1">
                <CardHeader className="pb-2">
                  <CardDescription>Total Downloads</CardDescription>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {userData?.total_downloads || 0}
                    <Download className="h-6 w-6 text-zinc-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-600">Patterns you've downloaded so far.</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions / Recent Activity Placeholder */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-playfair text-zinc-900">Start Creating</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="group hover:border-pink-200 transition-colors cursor-pointer overflow-hidden">
                  <Link href="/patterns">
                    <div className="aspect-video bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                      <Library className="h-12 w-12 text-pink-500" />
                    </div>
                    <CardHeader>
                      <CardTitle>Browse New Patterns</CardTitle>
                      <CardDescription>Discover hundreds of trending designs.</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
                <Card className="group hover:border-pink-200 transition-colors cursor-pointer overflow-hidden">
                  <Link href="/patterns?category=amigurumi">
                    <div className="aspect-video bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                      <Heart className="h-12 w-12 text-yellow-600" />
                    </div>
                    <CardHeader>
                      <CardTitle>Amigurumi Collection</CardTitle>
                      <CardDescription>Find your next cute toy project.</CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
