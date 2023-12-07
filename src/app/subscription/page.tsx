"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

import { useDisclosure } from "@nextui-org/use-disclosure";
import PricingItem from "./PricingItem";

export default function SubscriptionPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex justify-center flex-col h-[700px]">
      <div className="text-center text-white tracking-wide ">
        <h1 className="text-7xl font-bold py-5">
          Pay once, forget about payments for a month!
        </h1>
        <div className="w-full flex justify-center">
          <p className="text-lg font-semibold w-96">
            Now, you can choose one of our beneficial monthly packages! No more
            bothering of payment every time! You will certainly find one package
            which perfectly suits your needs!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full grow">
        <PricingItem
          name="STANDARD"
          price={199}
          descr1="Unlimited use of C segment and lower"
          descr2="Support in many cities"
          descr3="Daily 10 km free of petrol on one car"
          onSignup={onOpen}
        />
        <PricingItem
          name="BUSINESS"
          price={449}
          descr1="Unlimited use up to E segment"
          descr2="Sport car available once a week"
          descr3="Daily 50 km free of petrol on one car"
          onSignup={onOpen}
        />
        <PricingItem
          name="LUXURY"
          price={799}
          descr1="Unlimited use of any available cars"
          descr2="Personal support service"
          descr3="Unlimited free petrol"
          onSignup={onOpen}
        />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Sign up for Subscription
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="bordered"
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="bordered"
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    I want to receive newsletters about promotions, discounts,
                    etc.
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  className="font-bold w-32 py-3 px-6 rounded-3xl"
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  className="font-bold w-32 py-3 px-6 rounded-3xl"
                >
                  Checkout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
