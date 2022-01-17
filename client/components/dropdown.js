import { Menu, Transition } from '@headlessui/react'
import { useEffect, Fragment } from 'react'
import { ChevronDownIcon} from '@heroicons/react/solid'

export default function Dropdown(props) {
    const reversedOptions = [...props.options]
    reversedOptions.reverse()

    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 w-44">
            <div className="ml-0.5">
              {reversedOptions[0]}
            </div>
            <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                { reversedOptions.map(element => <Option label={element}/>) }
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  function Option(props) {
      return <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            'block w-full text-left px-4 py-2 text-sm'
          )}
        >
          {props.label}
        </a>
      )}
    </Menu.Item>
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }