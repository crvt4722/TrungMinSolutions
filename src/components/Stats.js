export default function Stats() {
    const stats = [
        {
            number: '1000+',
            label: 'Khách hàng tin tương'
        },
        {
            number: '5000+',
            label: 'Account đã bán'
        },
        {
            number: '99%',
            label: 'Tỷ lệ hài lòng'
        },
        {
            number: '24/7',
            label: 'Hỗ trợ khách hàng'
        }
    ];

    return `
        <section class="stats">
            <div class="container">
                <h2 class="section-title" style="color: white;">Thành Tích Của Chúng Tôi</h2>
                <div class="stats-grid">
                    ${stats.map(stat => `
                        <div class="stat-item">
                            <span class="stat-number">${stat.number}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
} 