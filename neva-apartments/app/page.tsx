import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const tabs = [
  {
    key: 'all',
    display: 'All'
  },
  {
    key: 'oceans',
    display: 'Oceans'
  },
  {
    key: 'forests',
    display: 'Forests'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover">
      <Head>
        <title>Create Next App</title>
      </Head>

      <header className="flex justify-between items-center h-[90px] px-6">
        <div className="text-transparent">hm</div>
        <div>Neva Apartments</div>
        <Link href="#" className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90">
          Get in touch
        </Link>
      </header>

      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <TabGroup>
            <TabList className="flex items-center gap-12">
              {
                tabs.map((tab) => (
                  <Tab
                  key={tab.key}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {tab.display}
                </Tab>
                ))
              }

            </TabList>
            <TabPanels className="h-full bg-stone-900 bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
              <TabPanel>
                All Photos
              </TabPanel>
              <TabPanel>Oceans</TabPanel>
              <TabPanel>Forests</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p>Photography Portfolio</p>
      </footer>
    </div>
  );
}
