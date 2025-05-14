const pricingPlans = [
    {
      title: "Starter",
      price: "0",
      description: "For small schools up to 100 students.",
      features: [
        "Basic student management",
        "Gradebook",
        "Attendance tracking",
        "Basic reporting",
        "Financial management",
        "Student portal",
        
      ],
    },

    {
      title: "Standard",
      price: "29",
      description: "For growing schools up to 250 students",
      features: [
      " Everything in Starter",
        "Financial management",
        "Student portal",
        "SMS notifications",
        "Advanced reporting",
        "Biometric attendance",
      ],
    },
    {
      title: "Premium",
      price: "12",
      description: "For established schools up to 500 students",
      features: [
       " Everything in Standard",
        " Biometric attendance",
        "Teacher platform",
        "Advanced analytics",
        "Parent mobile app",
        "Priority support",
      ],
      isPopular: true,
    },
   
    {
      title: "Enterprise",
      price: "29",
      description: "For large schools with 500+ students",
      features: [
       " Everything in Premium",
        "Customized solutions",
       " API access",
        "Dedicated support team",
       " On-site training",
        "Custom integrations",
      ],
      isEnterprice :true,
    },
  ];
  
  export default pricingPlans;
  