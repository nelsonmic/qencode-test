"use client"
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Routes } from '@/core/routing';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(Routes.auth.login);
  }, [router]);

  return null;
};

export default HomePage;
