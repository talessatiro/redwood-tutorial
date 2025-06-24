import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <Toaster />
      <header className="mx-4 mt-4">
        <div className="flex justify-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span>Logged in as {currentUser.email}</span>{' '}
              <button
                className="block rounded bg-blue-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white disabled:opacity-50"
                type="button"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              className="block rounded bg-blue-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white disabled:opacity-50"
              to={routes.login()}
            >
              Login
            </Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link className="text-2xl hover:underline" to={routes.home()}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-2xl hover:underline" to={routes.about()}>
                About
              </Link>
            </li>
            <li>
              <Link className="text-2xl hover:underline" to={routes.contact()}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pb-4 pl-4 pr-4">{children}</main>
    </>
  )
}

export default BlogLayout
