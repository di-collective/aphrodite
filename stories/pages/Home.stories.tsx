import React from 'react';
import {Meta} from '@storybook/react';

import {Text} from '../../src/components/Text';
import {Button} from '../../src/components/Button';
import {Toolbar} from '../../src/components/Toolbar';
import {Drawer} from '../../src/components/Drawer';
import {Carousel} from '../../src/components/Carousel';
import {Card} from '../../src/components/Card';
import {InputField} from '../../src/components/InputField';
import {useState} from '@storybook/addons';

const meta: Meta = {
  title: 'Pages/Home',
};

export default meta;

export const Default = () => {
  const [isDrawerOpen, setDrawerOpened] = useState(false);
  return (
    <div className="max-w-screen-md mx-auto">
      <header>
        <Toolbar
          title="Homepage"
          showTitle
          showSearch={false}
          onBurgerClicked={() => {
            setDrawerOpened(true);
          }}
        />
      </header>
      <main className="relative w-full min-h-screen">
        <Drawer
          isShowing={isDrawerOpen}
          onClose={() => {
            setDrawerOpened(false);
          }}
          items={[
            {
              caption: 'Drawer item #1',
              isActive: false,
              image: (
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              ),
              onClick: (di) => {
                console.log(di);
                setDrawerOpened(false);
              },
            },
            {
              caption: 'Drawer item #2',
              isActive: false,
              image: 'https://picsum.photos/200',
              onClick: (di) => {
                console.log(di);
                setDrawerOpened(false);
              },
            },
            {
              caption: 'Drawer item #3',
              isActive: true,
              image: (
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              ),
              onClick: (di) => {
                console.log(di);
                setDrawerOpened(false);
              },
            },
          ]}
        />

        <form className="py-4 px-2 border">
          <Text variant="title" className="mb-4">
            Look for a Thing!
          </Text>
          <InputField label="City" />
          <div className="grid grid-cols-[3fr_1fr] gap-2">
            <InputField label="Start Date" type="date" />
            <InputField label="Time" type="time" />
            <InputField label="End Date" type="date" />
            <InputField label="Time" type="time" />
          </div>
          <Button type="submit" fullWidth className="">
            Look!
          </Button>
        </form>

        <div className="py-2">
          <Carousel
            showNavigation={false}
            items={[
              {
                img: 'https://picsum.photos/400',
                alt: 'IMG-1',
              },
              {
                img: 'https://picsum.photos/500',
                alt: 'IMG-2',
              },
              {
                img: 'https://picsum.photos/600',
                alt: 'IMG-3',
              },
              {
                img: 'https://picsum.photos/700',
                alt: 'IMG-4',
              },
              {
                img: 'https://picsum.photos/800',
                alt: 'IMG-5',
              },
            ]}
          />
        </div>
        <hr />
        <div className="grid grid-cols-2 gap-2 py-4 md:grid-cols-4">
          <Card image="https://picsum.photos/200" alt="" title="Card One" onClick={console.log} />
          <Card image="https://picsum.photos/200" alt="" title="Card Two" />
          <Card image="https://picsum.photos/200" alt="" title="Card Tri" />
          <Card image="https://picsum.photos/200" alt="" title="Card Fou" />
        </div>

        <div className="flex flex-nowrap gap-2 overflow-scroll scrollbar-none py-4">
          <Card
            className="flex-none w-56"
            image="https://picsum.photos/300"
            alt=""
            title="Card One"
            onClick={console.log}
          />
          <Card
            className="flex-none w-56"
            image="https://picsum.photos/300"
            alt=""
            title="Card Two"
          />
          <Card
            className="flex-none w-56"
            image="https://picsum.photos/300"
            alt=""
            title="Card Tri"
          />
          <Card
            className="flex-none w-56"
            image="https://picsum.photos/300"
            alt=""
            title="Card Fou"
          />
          <Card
            className="flex-none w-56"
            image="https://picsum.photos/200"
            alt=""
            title="Card Fiv"
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
