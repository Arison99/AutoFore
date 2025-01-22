import React, { useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import './pricingTable.css'; // Import stylesheet

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const plans = [
    {
      name: 'Free',
      description: 'Free accounting solution for small and micro-businesses',
      price: 0,
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [],
    },
    {
      name: 'Standard',
      description: 'Efficiently organize your transactions, accounts, reports, and books',
      price: 12,
      monthlyPrice: 12,
      yearlyPrice: 10,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Professional',
      description: 'Confidently take on projects, track your inventory, and handle purchases',
      price: 24,
      monthlyPrice: 24,
      yearlyPrice: 20,
      
    },
    {
      name: 'Premium',
      description: 'Enhanced customization and automation to streamline business processes',
      price: 36,
      monthlyPrice: 36,
      yearlyPrice: 30,
      
    },
    {
      name: 'Elite',
      description: 'Advanced accounting bundled with full-fledged inventory management',
      price: 129,
      monthlyPrice: 129,
      yearlyPrice: 100,
      
    },
    {
      name: 'Ultimate',
      description: 'Gain deeper insights with advanced business intelligence capabilities',
      price: 249,
      monthlyPrice: 249,
      yearlyPrice: 200,
     
    },
  ];

  return (
    <Container className="pricing-table-container">
      
      <h2 className="text-center">
      <h1 className='title'>PRICING</h1>
        The Perfect Balance of Features and Affordability</h2>
      
      <div className="billing-cycle-selector">
        <button
          className={billingCycle === 'Monthly' ? 'active' : ''}
          onClick={() => handleBillingCycleChange('Monthly')}
        >
          Monthly
        </button>
        <button
          className={billingCycle === 'Yearly' ? 'active' : ''}
          onClick={() => handleBillingCycleChange('Yearly')}
        >
          Yearly (Save up to 25%)
        </button>
      </div>
      <Row>
        {plans.map((plan) => (
          <Col key={plan.name} xs={12} sm={6} md={4} lg={3}>
            <div className={`pricing-card ${plan.name === 'Free' ? 'free-plan' : ''}`}>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="price-container">
                <span className="price">
                  {billingCycle === 'Monthly' ? `$${plan.monthlyPrice}` : `$${plan.yearlyPrice}`}
                </span>
                <span className="billing-cycle">
                  {billingCycle === 'Monthly' ? '/Org/Month' : '/Org/Year'}
                </span>
              </div>
              <Button className='btn' variant="primary" size="sm">
                {plan.name === 'Free' ? 'Start my free trial' : 'Start my free trial'}
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <div className="explore-all-plans">
        <p>Explore all plans</p>
      </div>
    </Container>
  );
};

export default PricingTable;