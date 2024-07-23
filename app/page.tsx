'use client'
import Image from "next/image"
import bimi from '../public/images/icon.png'
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0xADD50396b9ad61A930F46e85AD900FD31DD10c7f');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-hero p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p 
          className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b from-zinc-800 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-zinc-800/30 lg:p-4"
          onClick={handleCopy}
          style={{ cursor: 'pointer' }}
        >
          <code className="font-mono font-bold">0xADD50396b9ad61A930F46e85AD900FD31DD10c7f</code>
          {copied && <span className="ml-2 text-green-500">Copied!</span>}
        </p>
        {/* <div className="flex h-48 w-full items-end justify-center lg:size-auto lg:bg-none">
          <Image
            src="/images/join.png"
            alt="Join"
            width={200}
            height={48}
            priority
          />
        </div> */}
      </div>

      <div className="relative flex flex-col place-items-center">
        <h1 className="text-5xl font-bold glow text-black text-center">Baby Timi</h1>
        <Image
          alt="Baby Timi"
          src={bimi}
          placeholder="blur"
          quality={100}
          className="w-[200px] h-[200px]"
        />
        <div className="mt-4 p-5">
          <a
            href="https://app.uniswap.org/swap?outputCurrency=0xADD50396b9ad61A930F46e85AD900FD31DD10c7f&chain=base&inputCurrency=ETH"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
          </a>
        </div>
      </div>

      <div className="mb-24 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        <a
          href="https://t.me/BabyTimiBaseOfficial"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            Telegram
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="https://dexscreener.com/base/0x104dddd35fcfa285c7a1511d410d6582211e7189"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-2xl font-semibold">
            Dex
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  );
}