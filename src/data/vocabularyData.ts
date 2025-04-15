// vocabularyData.ts
export interface VocabularyTerm {
  term: string;
  meaning: string;
}

export interface VocabularyCategory {
  category: string;
  terms: VocabularyTerm[];
}

export const vocabularyData: VocabularyCategory[] = [
  {
    category: "SQL",
    terms: [
      {
        term: "CTE",
        meaning: "A temporary result set defined within a WITH clause, used to simplify complex queries."
      },
      {
        term: "Window Function",
        meaning: "Performs calculations across a set of table rows related to the current row."
      },
      {
        term: "Normalization",
        meaning: "Organizing data to reduce redundancy and improve integrity."
      },
      {
        term: "Denormalization",
        meaning: "Combining tables to reduce joins and improve performance."
      },
      {
        term: "Indexing",
        meaning: "Optimization technique to speed up data retrieval."
      },
      {
        term: "Execution Plan",
        meaning: "Visual representation of query execution for performance tuning."
      },
      {
        term: "ACID",
        meaning: "Atomicity, Consistency, Isolation, Durability - reliable transaction properties."
      },
      {
        term: "Subquery",
        meaning: "A query nested inside another query."
      },
      {
        term: "Correlated Subquery",
        meaning: "A subquery that depends on the outer query."
      },
      {
        term: "Stored Procedure",
        meaning: "Precompiled SQL statements executed as a unit."
      },
      {
        term: "Trigger",
        meaning: "Code executed automatically in response to table/view events."
      },
      {
        term: "Pivot",
        meaning: "Transform rows into columns."
      },
      {
        term: "Unpivot",
        meaning: "Transform columns into rows."
      },
      {
        term: "Sharding",
        meaning: "Distributing data across multiple machines."
      },
      {
        term: "ETL",
        meaning: "Extract-Transform-Load - data pipeline method."
      },
      {
        term: "ELT",
        meaning: "Extract-Load-Transform - alternate data pipeline method."
      },
      {
        term: "Data Warehouse",
        meaning: "Used for OLAP - reporting and analytics."
      },
      {
        term: "OLTP",
        meaning: "Used for transactional systems with frequent updates."
      },
      {
        term: "JOIN",
        meaning: "Combine rows from two or more tables."
      },
      {
        term: "UNION",
        meaning: "Combine results from multiple SELECT statements."
      },
    ]
  },
  {
    category: "Python",
    terms: [
      {
        term: "List Comprehension",
        meaning: "A concise way to create lists using a single line of code."
      },
      {
        term: "Decorator",
        meaning: "A function that takes another function and extends its behavior without modifying it."
      },
      {
        term: "Generator",
        meaning: "A special type of iterator that generates values on-the-fly instead of storing them in memory."
      },
      {
        term: "Lambda",
        meaning: "A small anonymous function defined with the lambda keyword."
      },
      {
        term: "Virtual Environment",
        meaning: "An isolated environment for Python projects to manage dependencies separately."
      },
    ]
  },
  {
    category: "AI & ML",
    terms: [
      {
        term: "Supervised Learning",
        meaning: "Training algorithm with labeled data to predict outcomes for unseen data."
      },
      {
        term: "Unsupervised Learning",
        meaning: "Finding patterns in data without pre-existing labels."
      },
      {
        term: "Neural Network",
        meaning: "Computing system inspired by biological neural networks that can learn from examples."
      },
      {
        term: "Backpropagation",
        meaning: "Algorithm for training neural networks by adjusting weights based on error gradient."
      },
      {
        term: "Overfitting",
        meaning: "When a model learns the training data too well, including noise and outliers."
      },
    ]
  }
];