"use client";

import { useState, Fragment } from "react";
import { AlignJustify, X } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Category } from "@/types";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const routes = data.map(({ id, name }: { id: string; name: string }) => ({
    href: `/category/${id}`,
    label: name,
    active: pathname === `/category/${id}`,
  }));

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 md:hidden bg-transparent p-0"
      >
        <AlignJustify size={24} color="black" />
      </Button>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          open={open}
          as="div"
          onClose={onClose}
          className="relative z-40 md:hidden"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -right-[250px]"
              enterTo="opacity-100 right-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-[250px] flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-start px-4">
                  <IconButton icon={<X size={15} onClick={onClose} />} />
                </div>
                <nav className="p-4">
                  <nav className="mx-6 flex flex-col justify-center items-end lg:space-x-6 gap-2">
                    {routes.map(
                      ({
                        href,
                        label,
                        active,
                      }: {
                        href: string;
                        label: string;
                        active: boolean;
                      }) => (
                        <Link
                          key={href}
                          href={href}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            active ? "text-black" : "text-neutral-500"
                          )}
                          onClick={onClose}
                        >
                          {label}
                        </Link>
                      )
                    )}
                  </nav>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNav;
