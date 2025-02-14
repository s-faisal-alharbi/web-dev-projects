import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { useTranslation } from 'react-i18next'


export const Newsletter = ({ status, message, onValidated }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>{t('Subscribe to our Newsletter')}<br></br> {t('& Never miss latest updates')}</h3>
              {status === 'sending' && <Alert>{t('Sending...')}</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder={t("Email Address")} />
                  <button type="submit">{t('Submit')}</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
