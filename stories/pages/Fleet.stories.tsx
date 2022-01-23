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
  title: 'Pages/Fleet',
};

export default meta;

export const Default = () => {
  const [isDrawerOpen, setDrawerOpened] = useState(false);
  const Check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="max-w-screen-md mx-auto border-x">
      <header>
        <Toolbar
          title="Fleet Management"
          showTitle
          showSearch={true}
          showBurger={false}
          tools={[
            {
              key: 'question',
              icon: (
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              ),
            },
            {
              key: 'delete',
              icon: (
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              ),
            },
            {
              key: 'add',
              icon: (
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              ),
            },
          ]}
        />
      </header>
      <main className="relative w-full min-h-screen px-2">
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

        {/* <div className="flex flex-row-reverse gap-2 mt-2">
          <Button size="sm" variant="outlined">
            Add Vehicle
          </Button>
          <Button size="sm" variant="text">
            Pilih
          </Button>
        </div> 

        <hr className="mt-2" /> */}

        <div className="mt-2">
          <Text variant="subtitle">Location</Text>
          <div className="flex flex-row gap-2 flex-wrap mt-2 items-center">
            <Button size="sm" rightIcon={Check}>
              Jakarta Pusat
            </Button>
            <Button size="sm" variant="outlined">
              Denpasar
            </Button>
            <Button size="sm" variant="outlined">
              Kuta
            </Button>
            <Button size="sm" variant="outlined">
              Yogyakarta
            </Button>
          </div>
        </div>

        <div className="mt-2">
          <Text variant="subtitle">Category</Text>
          <div className="flex flex-row gap-2 flex-wrap mt-2 items-center">
            <Button size="sm" variant="outlined">
              Mobil
            </Button>
            <Button size="sm" rightIcon={Check}>
              Motor
            </Button>
            <Button size="sm" variant="outlined">
              Sepeda
            </Button>
          </div>
        </div>

        <hr className="mt-2" />

        <div className="mt-2">
          <Text variant="subtitle">Fleet</Text>
          <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 lg:grid-cols-6">
            <Card image="https://picsum.photos/200" alt="" title="Card One" onClick={console.log} />
            <Card image="https://picsum.photos/200" alt="" title="Card Two" />
            <Card image="https://picsum.photos/200" alt="" title="Card Tri" />
            <Card image="https://picsum.photos/200" alt="" title="Card Fou" />
            <Card image="https://picsum.photos/200" alt="" title="Card Fiv" />
            <Card image="https://picsum.photos/200" alt="" title="Card Six" />
            <Card image="https://picsum.photos/200" alt="" title="Card Sev" />
            <Card image="https://picsum.photos/200" alt="" title="Card Eit" />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
