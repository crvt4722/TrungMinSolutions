export default function Products() {
    const products = [
        {
            icon: '👤',
            title: 'Facebook Account',
            price: 'Từ 50,000 VNĐ',
            description: 'Account Facebook chất lượng cao, đã verify, sẵn sàng sử dụng cho mục đích marketing',
            features: [
                'Account Real Name',
                'Đã verify Email & Phone',
                'Avatar & Cover chuyên nghiệp',
                'Bảo hành 30 ngày'
            ]
        },
        {
            icon: '📄',
            title: 'Facebook Page',
            price: 'Từ 100,000 VNĐ',
            description: 'Fanpage Facebook có lượng follow tự nhiên, tỷ lệ tương tác cao, phù hợp kinh doanh',
            features: [
                'Follow tự nhiên',
                'Tỷ lệ tương tác cao',
                'Nội dung chuyên nghiệp',
                'Hỗ trợ chuyển quyền admin'
            ]
        },
        {
            icon: '💼',
            title: 'Business Manager',
            price: 'Từ 300,000 VNĐ',
            description: 'BM Facebook đã setup hoàn chỉnh, limit cao, sẵn sàng chạy quảng cáo quy mô lớn',
            features: [
                'Limit cao',
                'Đã verify đầy đủ',
                'Payment method sẵn sàng',
                'Hỗ trợ technical 24/7'
            ]
        },
        {
            icon: '🎯',
            title: 'Ads Account',
            price: 'Từ 200,000 VNĐ',
            description: 'Tài khoản quảng cáo Facebook với limit cao, trust score tốt, tối ưu cho performance marketing',
            features: [
                'Limit spending cao',
                'Trust score tốt',
                'Lịch sử clean',
                'Tối ưu conversion'
            ]
        },
        {
            icon: '🔧',
            title: 'Dịch Vụ Setup',
            price: 'Từ 500,000 VNĐ',
            description: 'Dịch vụ setup và tối ưu toàn bộ hệ thống Facebook Marketing cho doanh nghiệp',
            features: [
                'Setup BM từ A-Z',
                'Tối ưu cấu trúc ads',
                'Training team',
                'Hỗ trợ dài hạn'
            ]
        },
        {
            icon: '📊',
            title: 'Dịch Vụ Tư Vấn',
            price: 'Liên hệ',
            description: 'Tư vấn chiến lược Facebook Marketing, audit tài khoản và tối ưu hiệu suất quảng cáo',
            features: [
                'Audit tài khoản',
                'Chiến lược marketing',
                'Tối ưu hiệu suất',
                'Báo cáo chi tiết'
            ]
        }
    ];

    return `
        <section class="products" id="products">
            <div class="container">
                <h2 class="section-title">Sản Phẩm Của Chúng Tôi</h2>
                <div class="product-grid">
                    ${products.map(product => `
                        <div class="product-card">
                            <span class="product-icon">${product.icon}</span>
                            <h3>${product.title}</h3>
                            <div class="product-price">${product.price}</div>
                            <p>${product.description}</p>
                            <ul class="product-features">
                                ${product.features.map(feature => `
                                    <li>${feature}</li>
                                `).join('')}
                            </ul>
                            <a href="#contact" class="cta-button">Đặt mua</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
} 