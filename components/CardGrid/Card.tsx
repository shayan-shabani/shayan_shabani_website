'use client';

import Link from 'next/link';
import AES from 'crypto-js/aes.js';
import Utf8 from 'crypto-js/enc-utf8.js';
import SpotlightCard from 'components/SpotlightCard';
import GradientBorderCard from 'components/GradientBorderCard';

export const Card = ({
  title,
  link,
  tags,
  encrypted = false,
  children
}: {
  title: string;
  link?: string;
  tags?: string[];
  children?: React.ReactNode;
  encrypted?: boolean;
}) => {
  // Determine if this card is a link
  const isLink = !!link;
  
  // Define text classes with conditional hover effects only for linked cards
  const titleClass = `text-slate-900 dark:text-slate-300 font-mono font-bold text-lg sm:text-xl mb-2 sm:mb-4 ${
    isLink ? 'group-hover:text-amber-500 dark:group-hover:text-amber-400' : ''
  } transition duration-300`;
  
  const textClass = `text-slate-400 dark:text-slate-400 text-sm sm:text-base ${
    isLink ? 'group-hover:text-slate-900 dark:group-hover:text-slate-200' : ''
  } flex-1 transition duration-300`;
  
  const tagsClass = `mt-3 sm:mt-6 text-sm text-slate-500 ${
    isLink ? 'group-hover:text-slate-600 dark:group-hover:text-slate-400' : ''
  } font-mono transition duration-300`;

  // Card content
  const content = (
    <>
      <h2 className={titleClass}>{title}</h2>
      {children && <p className={textClass}>{children}</p>}
      {tags && <div className={tagsClass}>{tags.join(` · `)}</div>}
    </>
  );

  // Create the card with gradient border
  const cardContent = (
    <GradientBorderCard isLink={isLink} heightFull={true}>
      {content}
    </GradientBorderCard>
  );

  // Wrap in SpotlightCard if it's a link
  const wrappedCard = isLink ? (
    <SpotlightCard>{cardContent}</SpotlightCard>
  ) : cardContent;

  // Handle different types of links
  if (link && encrypted) {
    const handleClick = () => {
      const password = prompt('Enter link password:');
      const decrypted = AES.decrypt(link, password).toString(Utf8);
      if (decrypted) {
        window.location.href = decrypted;
      } else {
        alert('Incorrect password');
      }
    };
    return (
      <button onClick={handleClick} className="text-left w-full h-full">
        {wrappedCard}
      </button>
    );
  } else if (link && !encrypted) {
    if (link[0] === '/') {
      return (
        <Link href={link} className="w-full h-full">
          {wrappedCard}
        </Link>
      );
    }
    return (
      <a href={link} target="_blank" className="w-full h-full">
        {wrappedCard}
      </a>
    );
  } else {
    return wrappedCard;
  }
};