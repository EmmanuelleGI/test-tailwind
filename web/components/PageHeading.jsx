import { ChevronLeftIcon, ReceiptRefundIcon } from '@heroicons/react/16/solid';
import { Button } from './javascript/button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PageHeading({
  title,
  action,
  iconAction,
  handleAction,
}) {
  const handleRetour = () => {
    console.log('click sur bouton retour');
  };

  return (
    <div className="md:flex md:items-center md:justify-between border-b pb-3 m-5">
      <div className="min-w-0 flex-1 ">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">
        {action && (
          <Button className="bg-orange shadow-xl" color="orange" onClick={handleAction}>
            {iconAction}
            {action}
          </Button>
        )}
      </div>
    </div>
  );
}
