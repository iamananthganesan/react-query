# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Notes

installed
1.react-router-dom
2.@tanstack/react-query

Need to import QueryClientProvider component from "@tanstack/react-query"
You need to wrap your root component with the <QueryClientProvider> like below 

<QueryClientProvider>
    <App/>
</QueryClientProvider>

"QueryClientProvider" component requires one of the props called client before that we need to create an instance for the QueryClient
    https://tanstack.com/query/latest/docs/framework/react/reference/QueryClientProvider
    From documentation
        -Use the QueryClientProvider component to connect and provide a QueryClient to your application:

const queryClient = new QueryClient()

this object help us to do fetch and update the data 

<QueryClientProvider client={queryClient}>
    <App/>
</QueryClientProvider>


use need to make a use of useQuery hook from "@tanstack/react-query"

you need to destructure const {data, isLoading, isError, error} = useQuery({
    queryKey: ["posts"],
    queryFn: ()=> getPosts()
})
