import './Footer.css'

const navigation = [
    { name: '会員登録'},
    { name: '運営会社'},
    { name: '利用規約'},
    { name: '個人情報の取扱について'},
    { name: '特定商取引法に基づく表記'},
    { name: 'お問い合わせ'},
]

export default function Footer() {
    return (
        <div className={'footer h-32 justify-between justify-content-between'}>
            {navigation.map((item) => (
                <span key={item.name} className={'footer-items self-center'}>{item.name}</span>
            ))}
        </div>
    )
}
