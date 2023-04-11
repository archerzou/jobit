import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const DisclosurePanel = ({ data, handleSelect, defaultOpen, title }) => (
  <Disclosure as="div" defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-bold text-natural_3 hover:bg-primary hover:text-white focus:outline-none">
          <span>{title}</span>
          <ChevronUpIcon
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-black_1`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
          <ul className="space-y-4 text-sm text-natural_3 ">
            {data?.map((option) => (
              <li key={option.value}>
                <div className="flex justify-between ">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-item-${option.value}`}
                      type="checkbox"
                      onChange={(e) => handleSelect(e, option.value)}
                      className="w-4 h-4 text-natural_3 bg-gray-100 border-gray-300 rounded"
                    />
                    <label htmlFor={`checkbox-item-${option.value}`} className="ml-4 text-sm font-medium text-natural_3">{option.name}</label>
                  </div>
                  <p className="flex bg-natural_4 text-natural_5 rounded-full px-2.5 py-1">{option.est_count}</p>
                </div>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default DisclosurePanel;
