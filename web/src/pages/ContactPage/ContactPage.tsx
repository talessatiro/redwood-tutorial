// import { Link, routes } from '@redwoodjs/router'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

type ContactFormValues = {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const formMethods = useForm<ContactFormValues>({ mode: 'onChange' })
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form
        className="mt-4 w-full"
        onSubmit={onSubmit}
        error={error}
        formMethods={formMethods}
      >
        <FormError error={error} wrapperClassName="form-error" />
        <Label name="name" className="block text-sm text-gray-600 uppercase">
          Name *
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          className="block w-full p-1 border rounded text-xs"
        />
        <FieldError name="name" className="error" />
        <Label name="email" className="block text-sm text-gray-600 uppercase">
          Email *
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          className="block w-full p-1 border rounded text-xs"
        />
        <FieldError name="email" className="error" />
        <Label name="message" className="block text-sm text-gray-600 uppercase">
          Message *
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          className="block w-full p-1 border rounded text-xs"
        />
        <FieldError name="message" className="error" />
        <Submit
          className="block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50"
          disabled={loading}
        >
          Save
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
