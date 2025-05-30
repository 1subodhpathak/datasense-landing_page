export interface TableData {
  table_name: string;
  columns: string[];
  rows: any[][];
}

export interface ExpectedOutput {
  columns: string[];
  rows: any[][];
  length: number;
}

export interface SqlQuestion {
  question_text: string;
  expected_output: ExpectedOutput;
  difficulty?: string;
  subtopic?: string;
  video?: string;
  table_data?: TableData[];
  scenario: string;
  'data-overview': string;
  company: string[];
  common_mistakes: string;
  ideal_time: string;
  interview_probability: string;
  roles: string;
}

export const questions: SqlQuestion[] = [
  {
    question_text: "Write a SQL query to find the total sales amount for each product category.",
    scenario: "You are working with a sales database that contains information about products and their sales.",
    'data-overview': "Table: sales\nColumns: product_id, category, amount, date\nSample Data: Various sales records",
    company: ["TechCorp", "DataSystems"],
    common_mistakes: "Forgetting to group by category, not handling NULL values",
    ideal_time: "5 minutes",
    interview_probability: "High",
    roles: "Data Analyst, SQL Developer",
    difficulty: "Easy",
    subtopic: "Aggregation",
    expected_output: {
      columns: ["category", "total_sales"],
      rows: [
        ["Electronics", 15000],
        ["Clothing", 8000],
        ["Books", 5000]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "sales",
        columns: ["product_id", "category", "amount", "date"],
        rows: [
          [1, "Electronics", 5000, "2024-01-01"],
          [2, "Clothing", 3000, "2024-01-02"],
          [3, "Books", 2000, "2024-01-03"],
          [4, "Electronics", 10000, "2024-01-04"],
          [5, "Clothing", 5000, "2024-01-05"]
        ]
      }
    ]
  },
  {
    question_text: "Find the top 3 customers by total purchase amount.",
    scenario: "You need to analyze customer purchase patterns to identify the highest spending customers.",
    'data-overview': "Table: purchases\nColumns: customer_id, amount, date\nSample Data: Various purchase records",
    company: ["RetailCorp", "EcommerceInc"],
    common_mistakes: "Not using LIMIT, incorrect ordering",
    ideal_time: "5 minutes",
    interview_probability: "High",
    roles: "Business Analyst, Data Analyst",
    difficulty: "Easy",
    subtopic: "Sorting and Limiting",
    expected_output: {
      columns: ["customer_id", "total_amount"],
      rows: [
        ["C001", 5000],
        ["C002", 4500],
        ["C003", 4000]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "purchases",
        columns: ["customer_id", "amount", "date"],
        rows: [
          ["C001", 2000, "2024-01-01"],
          ["C002", 1500, "2024-01-02"],
          ["C003", 1000, "2024-01-03"],
          ["C001", 3000, "2024-01-04"],
          ["C002", 3000, "2024-01-05"],
          ["C003", 3000, "2024-01-06"]
        ]
      }
    ]
  },
  {
    question_text: "Calculate the average order value for each month in 2024.",
    scenario: "You need to analyze monthly order patterns to understand seasonal trends.",
    'data-overview': "Table: orders\nColumns: order_id, amount, order_date\nSample Data: Various order records",
    company: ["EcommerceInc", "RetailCorp"],
    common_mistakes: "Not handling date formatting correctly, incorrect grouping",
    ideal_time: "7 minutes",
    interview_probability: "Medium",
    roles: "Data Analyst, Business Intelligence",
    difficulty: "Medium",
    subtopic: "Date Functions",
    expected_output: {
      columns: ["month", "avg_amount"],
      rows: [
        ["January", 2500],
        ["February", 2800],
        ["March", 3000]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "orders",
        columns: ["order_id", "amount", "order_date"],
        rows: [
          [1, 2000, "2024-01-15"],
          [2, 3000, "2024-01-20"],
          [3, 2500, "2024-02-01"],
          [4, 3100, "2024-02-15"],
          [5, 2800, "2024-03-01"],
          [6, 3200, "2024-03-15"]
        ]
      }
    ]
  },
  {
    question_text: "Find products that have never been ordered.",
    scenario: "You need to identify products that might need marketing attention.",
    'data-overview': "Tables: products, orders\nSample Data: Product and order records",
    company: ["EcommerceInc", "RetailCorp"],
    common_mistakes: "Using IN instead of NOT EXISTS, incorrect join conditions",
    ideal_time: "8 minutes",
    interview_probability: "Medium",
    roles: "Data Analyst, Product Analyst",
    difficulty: "Medium",
    subtopic: "Subqueries",
    expected_output: {
      columns: ["product_id", "product_name"],
      rows: [
        [4, "Product D"],
        [5, "Product E"]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "products",
        columns: ["product_id", "product_name"],
        rows: [
          [1, "Product A"],
          [2, "Product B"],
          [3, "Product C"],
          [4, "Product D"],
          [5, "Product E"]
        ]
      },
      {
        table_name: "orders",
        columns: ["order_id", "product_id", "quantity"],
        rows: [
          [1, 1, 2],
          [2, 2, 1],
          [3, 3, 3]
        ]
      }
    ]
  },
  {
    question_text: "Calculate the running total of sales for each day.",
    scenario: "You need to track cumulative sales to analyze growth trends.",
    'data-overview': "Table: sales\nColumns: date, amount\nSample Data: Daily sales records",
    company: ["RetailCorp", "EcommerceInc"],
    common_mistakes: "Not ordering by date, incorrect window function usage",
    ideal_time: "10 minutes",
    interview_probability: "Medium",
    roles: "Data Analyst, Business Intelligence",
    difficulty: "Hard",
    subtopic: "Window Functions",
    expected_output: {
      columns: ["date", "daily_sales", "running_total"],
      rows: [
        ["2024-01-01", 1000, 1000],
        ["2024-01-02", 1500, 2500],
        ["2024-01-03", 2000, 4500]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "sales",
        columns: ["date", "amount"],
        rows: [
          ["2024-01-01", 1000],
          ["2024-01-02", 1500],
          ["2024-01-03", 2000]
        ]
      }
    ]
  },
  {
    question_text: "Find the second highest salary in each department.",
    scenario: "You need to analyze salary distributions across departments.",
    'data-overview': "Table: employees\nColumns: employee_id, department, salary\nSample Data: Employee records",
    company: ["TechCorp", "HRSystems"],
    common_mistakes: "Not handling ties correctly, incorrect window function usage",
    ideal_time: "12 minutes",
    interview_probability: "High",
    roles: "Data Analyst, HR Analyst",
    difficulty: "Hard",
    subtopic: "Window Functions",
    expected_output: {
      columns: ["department", "second_highest_salary"],
      rows: [
        ["IT", 80000],
        ["HR", 65000],
        ["Sales", 75000]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "employees",
        columns: ["employee_id", "department", "salary"],
        rows: [
          [1, "IT", 90000],
          [2, "IT", 80000],
          [3, "HR", 70000],
          [4, "HR", 65000],
          [5, "Sales", 85000],
          [6, "Sales", 75000]
        ]
      }
    ]
  },
  {
    question_text: "Find customers who made purchases in all product categories.",
    scenario: "You need to identify loyal customers who buy across all categories.",
    'data-overview': "Tables: customers, purchases, products\nSample Data: Various records",
    company: ["EcommerceInc", "RetailCorp"],
    common_mistakes: "Incorrect grouping, not handling NULL values",
    ideal_time: "15 minutes",
    interview_probability: "Medium",
    roles: "Data Analyst, Customer Analytics",
    difficulty: "Hard",
    subtopic: "Group By Having",
    expected_output: {
      columns: ["customer_id", "customer_name"],
      rows: [
        ["C001", "John Doe"],
        ["C002", "Jane Smith"]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "customers",
        columns: ["customer_id", "customer_name"],
        rows: [
          ["C001", "John Doe"],
          ["C002", "Jane Smith"],
          ["C003", "Bob Johnson"]
        ]
      },
      {
        table_name: "purchases",
        columns: ["customer_id", "product_id", "amount"],
        rows: [
          ["C001", 1, 100],
          ["C001", 2, 200],
          ["C001", 3, 300],
          ["C002", 1, 150],
          ["C002", 2, 250],
          ["C002", 3, 350],
          ["C003", 1, 120]
        ]
      },
      {
        table_name: "products",
        columns: ["product_id", "category"],
        rows: [
          [1, "Electronics"],
          [2, "Clothing"],
          [3, "Books"]
        ]
      }
    ]
  },
  {
    question_text: "Calculate the percentage of total sales for each product category.",
    scenario: "You need to analyze the sales distribution across product categories.",
    'data-overview': "Table: sales\nColumns: product_id, category, amount\nSample Data: Sales records",
    company: ["RetailCorp", "EcommerceInc"],
    common_mistakes: "Not calculating total correctly, incorrect percentage calculation",
    ideal_time: "10 minutes",
    interview_probability: "High",
    roles: "Data Analyst, Business Intelligence",
    difficulty: "Medium",
    subtopic: "Aggregation",
    expected_output: {
      columns: ["category", "total_sales", "percentage"],
      rows: [
        ["Electronics", 15000, "50%"],
        ["Clothing", 8000, "27%"],
        ["Books", 7000, "23%"]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "sales",
        columns: ["product_id", "category", "amount"],
        rows: [
          [1, "Electronics", 5000],
          [2, "Clothing", 3000],
          [3, "Books", 2000],
          [4, "Electronics", 10000],
          [5, "Clothing", 5000],
          [6, "Books", 5000]
        ]
      }
    ]
  },
  {
    question_text: "Find the most recent order for each customer.",
    scenario: "You need to analyze customer purchase patterns and recency.",
    'data-overview': "Table: orders\nColumns: order_id, customer_id, order_date, amount\nSample Data: Order records",
    company: ["EcommerceInc", "RetailCorp"],
    common_mistakes: "Not handling multiple orders per customer correctly",
    ideal_time: "8 minutes",
    interview_probability: "High",
    roles: "Data Analyst, Customer Analytics",
    difficulty: "Medium",
    subtopic: "Window Functions",
    expected_output: {
      columns: ["customer_id", "order_date", "amount"],
      rows: [
        ["C001", "2024-03-01", 300],
        ["C002", "2024-03-02", 250],
        ["C003", "2024-03-03", 400]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "orders",
        columns: ["order_id", "customer_id", "order_date", "amount"],
        rows: [
          [1, "C001", "2024-02-01", 200],
          [2, "C001", "2024-03-01", 300],
          [3, "C002", "2024-02-15", 150],
          [4, "C002", "2024-03-02", 250],
          [5, "C003", "2024-03-03", 400]
        ]
      }
    ]
  },
  {
    question_text: "Find employees who earn more than their department average.",
    scenario: "You need to identify high-performing employees for performance reviews.",
    'data-overview': "Table: employees\nColumns: employee_id, name, department, salary\nSample Data: Employee records",
    company: ["TechCorp", "HRSystems"],
    common_mistakes: "Not calculating department average correctly, incorrect comparison",
    ideal_time: "12 minutes",
    interview_probability: "High",
    roles: "Data Analyst, HR Analyst",
    difficulty: "Hard",
    subtopic: "Subqueries",
    expected_output: {
      columns: ["employee_id", "name", "department", "salary", "dept_avg_salary"],
      rows: [
        [1, "John Doe", "IT", 90000, 85000],
        [5, "Alice Brown", "Sales", 85000, 80000]
      ],
      length: 2
    },
    table_data: [
      {
        table_name: "employees",
        columns: ["employee_id", "name", "department", "salary"],
        rows: [
          [1, "John Doe", "IT", 90000],
          [2, "Jane Smith", "IT", 80000],
          [3, "Bob Johnson", "Sales", 75000],
          [4, "Mary Wilson", "Sales", 80000],
          [5, "Alice Brown", "Sales", 85000]
        ]
      }
    ]
  }
]; 