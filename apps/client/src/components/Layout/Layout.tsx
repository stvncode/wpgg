import { Outlet } from 'react-router-dom'
import { Header } from 'components/Header'
import { LayoutWrapper } from './Layout.styles'

export const Layout = () => (
    <LayoutWrapper>
        <Header />
        <div style={{ height: '100%' }}>
            <Outlet />
        </div>
    </LayoutWrapper>
)
