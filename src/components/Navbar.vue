<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link to="/" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Main
          </router-link>
          <router-link to="/todos" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Todos
          </router-link>
          <router-link to="/about" class="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </router-link>
        </PopoverGroup>
        
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link v-for="item in solutions" :key="item.name" :to="item.to" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  HomeIcon,
  MenuIcon,
  XIcon,
  InformationCircleIcon,
  CheckCircleIcon
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const solutions = [
  {
    name: 'Main',
    description: 'Get a better understanding of where your traffic is coming from.',
    to: '/',
    icon: HomeIcon,
  },
  {
    name: 'Todos',
    description: 'Speak directly to your customers in a more meaningful way.',
    to: '/todos',
    icon: CheckCircleIcon,
  },
  { 
    name: 'About', 
    description: "Your customers' data will be safe and secure.", 
    to: '/about', 
    icon: InformationCircleIcon },
]


export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
    }
  },
}
</script>