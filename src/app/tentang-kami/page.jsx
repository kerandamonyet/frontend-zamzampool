"use client"; // Add this line at the top

import React from 'react'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
    const router = useRouter();
    const handleNavigationHome = () => {
        router.push('/');
    }

    const handleNavigationCategory = () => {
        router.push('/category');
    }
    
  return (
    <div>
        <h1>ini tampilan About page</h1>
        <button type= "button" onClick={handleNavigationHome}>
            Home
        </button>
        <button type= "button" onClick={handleNavigationCategory}>
            Category
        </button>
    </div>

  )
}
