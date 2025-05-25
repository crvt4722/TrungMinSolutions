export default function Contact() {
    return `
        <section class="contact" id="contact">
            <div class="container">
                <h2 class="section-title">Liên Hệ Với Chúng Tôi</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>Thông Tin Liên Hệ</h3>
                        <div class="contact-item">
                            <div class="icon">📞</div>
                            <div>
                                <strong>Hotline/Zalo:</strong><br>
                                0981038022
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon">✉️</div>
                            <div>
                                <strong>Email:</strong><br>
                                contact@trungminsolutions.com
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon">💬</div>
                            <div>
                                <strong>Telegram:</strong><br>
                                @TrungMinSupport
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="icon">🌐</div>
                            <div>
                                <strong>Facebook:</strong><br>
                                https://www.facebook.com/nguyen.inh.trung.193207
                            </div>
                        </div>
                    </div>
                    <div class="contact-form">
                        <h3>Gửi Yêu Cầu Tư Vấn</h3>
                        <form style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                            <div style="margin-bottom: 1.5rem;">
                                <input type="text" placeholder="Họ và tên" required style="width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 10px; font-size: 16px; transition: all 0.3s ease;">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <input type="email" placeholder="Email" required style="width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 10px; font-size: 16px; transition: all 0.3s ease;">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <input type="tel" placeholder="Số điện thoại" required style="width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 10px; font-size: 16px; transition: all 0.3s ease;">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <select required style="width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 10px; font-size: 16px; transition: all 0.3s ease;">
                                    <option value="">Chọn sản phẩm quan tâm</option>
                                    <option value="account">Facebook Account</option>
                                    <option value="page">Facebook Page</option>
                                    <option value="bm">Business Manager</option>
                                    <option value="ads">Ads Account</option>
                                    <option value="setup">Dịch vụ Setup</option>
                                    <option value="consulting">Tư vấn</option>
                                </select>
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <textarea placeholder="Mô tả yêu cầu chi tiết" rows="4" style="width: 100%; padding: 15px; border: 2px solid #eee; border-radius: 10px; font-size: 16px; transition: all 0.3s ease; resize: vertical;"></textarea>
                            </div>
                            <button type="submit" class="cta-button" style="width: 100%; margin: 0;">Gửi yêu cầu</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
} 