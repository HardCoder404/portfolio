import React from 'react';
import { CONTACTS } from '../../../constants/constants';
import Link from 'next/link';
import { Mail, MapPin, Smartphone } from 'lucide-react';

const Contact = () => {
  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold flex justify-between'>
          Email Address
          <Mail className='inline-block ml-1 text-gray-400' size={16} />
        </span>

        <span className='text-xs text-gray-600' mailto>
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold flex justify-between'>
          Phone
          <Smartphone className='inline-block ml-1 text-gray-400' size={16} />
        </span>
        <span className='text-xs text-gray-600'>{CONTACTS.PHONE}</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold flex justify-between'>
          Location
          <MapPin className='inline-block ml-1 text-gray-400' size={16} />
        </span>
        <span className='text-xs text-gray-600'>{CONTACTS.LOCATION}</span>
      </div>
    </div>
  );
};

export default Contact;
