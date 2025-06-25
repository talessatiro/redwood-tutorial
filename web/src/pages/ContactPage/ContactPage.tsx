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
        <Label name="name" className="block text-sm uppercase text-gray-600">
          Name *
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          className="block w-full rounded border p-1 text-xs"
        />
        <FieldError name="name" className="error" />
        <Label name="email" className="block text-sm uppercase text-gray-600">
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
          className="block w-full rounded border p-1 text-xs"
        />
        <FieldError name="email" className="error" />
        <Label name="message" className="block text-sm uppercase text-gray-600">
          Message *
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          className="block h-24 w-full rounded border p-1 text-xs"
        />
        <FieldError name="message" className="error" />
        <Submit
          className="mt-4 block rounded bg-blue-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white disabled:opacity-50"
          disabled={loading}
        >
          Save
        </Submit>
      </Form>
    </>
  )
}

export default ContactPage
