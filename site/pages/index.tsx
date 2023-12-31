// import { NextSeo } from 'next-seo'
import toast, {
    Toaster,
    useToasterStore,
    ToastPosition,
} from '../../src'
import { $, $$, render, type JSX } from 'woby'
import { Navigate, Router } from 'woby-router'

import Logo from '../assets/dist/logo'
import Butter1 from '../assets/dist/butter-1'
import Butter2 from '../assets/dist/butter-2'
import GitHub from '../assets/dist/github'
import Checkmark from '../assets/dist/checkmark'
import { ToastExample } from '../components/sections/toast-example'
import { Footer } from '../components/sections/footer'
import { ToasterExample } from '../components/sections/toaster-example'
import { SplitbeeCounter } from '../components/sections/splitbee-counter'

import packageInfo from '../../package.json'
import '../dist/output.css'

const version = packageInfo.version

const Feature = ({ children }: { children?: JSX.Children }) => (
    <div className="flex gap-1 items-center">
        <Checkmark />
        <span className="font-bold">{children}</span>
    </div>
)

const Step = (props: {
    count: number
    title: string
    subTitle: string
    code: JSX.Element
}) => (
    <div className="flex flex-col gap-1 items-center">
        <div className="h-6 w-6 mb-2 text-sm rounded-full bg-toast-900 text-toast-50 flex items-center justify-center">
            {props.count}
        </div>
        <div className="font-bold">{props.title}</div>
        <div className="text-red-700 text-sm">{props.subTitle}</div>
        <code className="mt-2 border border-toast-200 py-2 px-4 rounded font-bold bg-white w-full text-center">
            {props.code}
        </code>
    </div>
)

const Steps = () => (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 my-12">
        <Step
            count={1}
            title="Install package"
            subTitle="It weighs less than 5kb"
            code={
                <code>
                    <span className="text-toast-600">yarn add</span>{' '}
                    <span className="text-toast-800">voby-toast</span>
                </code>
            }
        ></Step>
        <Step
            count={2}
            title="Add Toaster to your app"
            subTitle="Make sure it's placed at the top"
            code={
                <>
                    <span className="text-toast-600">{'<div>'}</span>
                    <span className="text-toast-800">{'<Toaster/>'}</span>
                    <span className="text-toast-600">{'</div>'}</span>
                </>
            }
        ></Step>
        <Step
            count={3}
            title="Start toasting!"
            subTitle="Call it from anywhere"
            code={
                <>
                    <span className="text-toast-600">{'toast'}</span>
                    <span className="text-toast-800">{'("Hello World")'}</span>
                </>
            }
        ></Step>
    </div>
)

const Features = () => (
    <div className="my-12 grid gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3">
        <Feature>Hot by default</Feature>
        <Feature>Easy to use</Feature>
        <Feature>Accessible</Feature>
        <Feature>Emoji Support</Feature>
        <Feature>Customizable</Feature>
        <Feature>Promise API</Feature>
        <Feature>Lightweight</Feature>
        <Feature>Pause on hover</Feature>
        <Feature>Headless Hooks</Feature>
    </div>
)

export default function Home() {
    const position = $<ToastPosition>('top-center')
    const reverse = $(false)
    const { toasts: allToasts } = useToasterStore()

    const shouldFade = $$(allToasts).filter((t) => $$(t.visible)).length && $$(position).includes('top')

    console.log('Home')

    return <Router routes={[]}>
        <div className="overflow-x-hidden">
            {/* <NextSeo
                title={'woby-toast - The Best React Notifications in Town'}
                openGraph={{
                    images: [
                        {
                            url: `https://woby-toast.com/social-image.png`,
                            width: 1200,
                            height: 630,
                        },
                    ],
                }}
                description="Add beautiful notifications to your React app with voby-toast. Lightweight. Smoking hot by default."
            /> */}
            <header className="bg-gradient-to-b from-toast-50 to-white bg-opacity-10">
                <div className="container  flex flex-col items-center relative">
                    <Butter1
                        className="absolute -left-24 md:left-24 transition-opacity duration-200"
                        style={{
                            opacity: shouldFade ? 0.5 : 1,
                        }}
                    />

                    <div>
                        <Logo
                            role="img"
                            aria-label="woby-toast"
                            className="relative animate-slide-in transition-all duration-200 -mt-8 md:-mt-4"
                            style={{
                                willChange: 'filter',
                                opacity: shouldFade ? 0.2 : 1,
                                filter: `blur(${shouldFade ? 6 : 0}px)`,
                            }}
                        />
                    </div>
                    <div className="text-center my-12 relative duration-200">
                        <h1 className="text-3xl md:text-4xl animate-enter font-bold text-toast-900">
                            The Best Toast in Town.
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-toast-600 mt-2">
                            Smoking hot React notifications.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 rounded-2xl bg-toast-200 p-4 w-full max-w-lg">
                        <button
                            data-splitbee-event="Trigger Toast"
                            data-splitbee-event-example="CTA"
                            className={[
                                'rounded-lg font-bold gap-4 flex bg-gradient-to-b from-white to-toast-200 shadow-button text-center',
                                'py-4 px-6',
                                'active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform',
                                'focus:outline-none focus:ring-4'
                            ]}
                            style={{
                                transitionProperty: 'box-shadow, transform',
                            }}
                            onClick={() => {
                                const promise = new Promise((res, rej) => {
                                    if (Math.random() < 0.85) {
                                        setTimeout(res, 1000)
                                    } else {
                                        setTimeout(rej, 3000)
                                    }
                                })

                                toast.promise(
                                    promise,
                                    {
                                        loading: 'Preparing toast',
                                        error: 'Whoops, it burnt',
                                        success: "Here's your toast",
                                    },
                                    {
                                        style: {
                                            width: '200px',
                                            paddingRight: '10px',
                                        },
                                    }
                                )
                            }}
                        >
                            <div>🛎 </div>
                            <span className="flex-1 mr-2">Make me a toast</span>
                        </button>
                        <a
                            className={[
                                'rounded-lg flex font-bold bg-white py-4 px-6 shadow-button  text-toast-800',
                                'active:translate-y-0.5 active:shadow-button-active transform'
                            ]}
                            style={{
                                transitionProperty: 'box-shadow, transform',
                            }}
                            data-splitbee-event="Open Link"
                            data-splitbee-event-target="GitHub"
                            onClick={() => { }}
                            href="https://github.com/timolins/woby-toast"
                        >
                            <GitHub className="opacity-100" />
                            <span className="flex-1 text-toast-800 text-center">GitHub</span>
                        </a>
                    </div>
                    <div className="text-toast-600 my-2">
                        <Navigate to="/docs">
                            <a className="underline">Documentation</a>
                        </Navigate>
                        {' · '}
                        <span>v{version}</span>
                    </div>

                    <Features />
                    <Steps />
                    <div className="w-full max-w-4xl">
                        <div className="my-14">
                            <h2 className="ml-5 text-2xl font-bold">Examples</h2>
                            <ToastExample />
                        </div>
                        <div className="my-14">
                            <h2 className="ml-5 mr-5 mb-4 text-2xl font-bold">
                                Change Position
                            </h2>

                            <ToasterExample
                                reverse={reverse}
                                position={position}
                            />
                        </div>
                    </div>
                </div>
            </header>
            <SplitbeeCounter />
            <Toaster position={position} reverseOrder={reverse} toastOptions={{}} />
            <div className="container flex justify-end -mt-10 pointer-events-none">
                <Butter2 className="transform translate-x-20" />
            </div>
            <Footer noBadge />
        </div>
    </Router>
}


render(<Home />, document.getElementById('app'))