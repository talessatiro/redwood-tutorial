// import { Link, routes } from '@redwoodjs/router'
import {
  FieldError,
  Form,
  Label,
  Submit,
  SubmitHandler,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

type ContactFormValues = {
  name: string
  email: string
  description: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />
        <Label name="email" errorClassName="error">
          Email
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
          errorClassName="error"
        />
        <FieldError name="email" className="error" />
        <Label name="description" errorClassName="error">
          Description
        </Label>
        <TextAreaField
          name="description"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="description" className="error" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
