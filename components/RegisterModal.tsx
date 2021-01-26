import React, { FC } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    useDisclosure,
    Button,
    FormLabel,
    Input,
  } from "@chakra-ui/react"
import CustomButton from './Button';

  interface buttonProps {
      title: string,
  }

const RegisterModal: FC <buttonProps> = ({title}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <div>
            <a href="#" onClick={onOpen}>{title}</a>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="xs"
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Register to get notified.</ModalHeader>
                <ModalCloseButton />
                <form  action="https://formspree.io/f/meqpngzp" method="POST">
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input name="Name" focusBorderColor="#FB6376" placeholder="Your name" />
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input name="Email" focusBorderColor="#FB6376" placeholder="Email" />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <CustomButton type="submit" title="Register" />
                </ModalFooter>
                </form>

                </ModalContent>
            </Modal>

        </div>
    )
}

export default RegisterModal;
