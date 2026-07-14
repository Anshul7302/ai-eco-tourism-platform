"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import WishlistCard from "../../components/wishlist/WishlistCard";
import WishlistStats from "../../components/wishlist/WishlistStats";
import EmptyWishlist from "../../components/wishlist/EmptyWishlist";

import {
  getWishlist,
  removeWishlist,
} from "../../services/wishlist";

import {
  getHomestay,
} from "../../services/homestays";

export default function WishlistPage() {

  const [wishlist, setWishlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  async function loadWishlist() {

    setLoading(true);

    try {

      const wishlistItems = await getWishlist(1);

      const fullData = await Promise.all(

        wishlistItems.map(async (item: any) => {

          const homestay = await getHomestay(item.homestay_id);

          return {

            wishlistId: item.id,

            ...homestay

          };

        })

      );

      setWishlist(fullData);

    }

    catch (err) {

      console.error(err);

    }

    finally {

      setLoading(false);

    }

  }

  async function handleRemove(id: number) {

    await removeWishlist(id);

    loadWishlist();

  }

  return (

    <>

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-green-700 mb-3">

          ❤️ My Wishlist

        </h1>

        <p className="text-gray-500 mb-10">

          Your favourite eco-friendly stays

        </p>

        <WishlistStats total={wishlist.length} />

        {

          loading ?

          <p className="text-center text-xl">

            Loading...

          </p>

          :

          wishlist.length === 0 ?

          <EmptyWishlist />

          :

          <div className="grid md:grid-cols-3 gap-8">

            {

              wishlist.map((item) => (

                <WishlistCard

                  key={item.wishlistId}

                  item={item}

                  onRemove={() => handleRemove(item.wishlistId)}

                />

              ))

            }

          </div>

        }

      </div>

      <Footer />

    </>

  );

}