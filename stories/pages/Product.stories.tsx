import React from 'react';
import {Meta} from '@storybook/react';

import {Toolbar} from '../../src/components/Toolbar';
import {Carousel} from '../../src/components/Carousel';
import {Property} from '../../src/components/Property';
import {Profile} from '../../src/components/Profile';

import {Text} from '../../src/components/Text';
import {Button} from '../../src/components/Button';
import {InputField} from '../../src/components/InputField';

export const Default = (args) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <header>
        <Toolbar title="Product" showBack showTitle showSearch={false} />
      </header>
      <main className="relative w-full min-h-screen">
        <div className="py-2">
          <Carousel
            showNavigation
            items={[
              {
                img: 'https://picsum.photos/400',
                alt: 'IMG-ONE',
              },
              {
                img: 'https://picsum.photos/600',
                alt: 'IMG-TWO',
              },
              {
                img: 'https://picsum.photos/800',
                alt: 'IMG-TRI',
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4">
          <Property fullWidth name="Brand" value="Honda" />
          <Property fullWidth name="Model" value="Vario" />
          <Property fullWidth name="Displacement" value="150cc" />
          <Property fullWidth name="Color" value="Red" />
          <Property fullWidth name="Front Brake" value="Disc" />
          <Property fullWidth name="Rear Brake" value="Drum" />
          <Property fullWidth name="Key" value="Keyless" />
          <Property fullWidth name="Distance" value="17,500km" />
        </div>
        <div className="mt-2">
          <Profile
            photo="https://picsum.photos/64"
            name="Warung Jaiyen"
            href="/"
            location="Jakarta"
          >
            <span className="grow" />
            <span className="flex flex-col">
              <Property
                image={
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                }
                value="10,000"
              />
              <Property
                image={
                  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                }
                value="10,000"
              />
            </span>
          </Profile>
        </div>

        <div className="p-2 border rounded mt-2">
          <Text variant="title">Terms & Condition</Text>
          <hr className="mt-1" />
          <Text>
            <ol className="list-decimal pl-4">
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </li>
            </ol>
          </Text>
        </div>

        <form className="p-2 border rounded mt-2">
          <Text variant="title">Pricing</Text>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <Property fullWidth name="Daily" value="Rp 50,000" />
            <Property fullWidth name="Weekly" value="Rp 300,000" isActive />
            <Property fullWidth name="Monthly" value="Rp 1,200,000" />
          </div>
          <div className="grid grid-cols-[3fr_1fr] gap-2 mt-4">
            <InputField label="Start Date" type="date" />
            <InputField label="Time" type="time" />
            <InputField label="End Date" type="date" />
            <InputField label="Time" type="time" />
          </div>
          <Button type="submit" fullWidth>
            Check Availability!
          </Button>
        </form>
      </main>
      <footer></footer>
    </div>
  );
};

const meta: Meta = {
  title: 'Pages/Product',
};

export default meta;
