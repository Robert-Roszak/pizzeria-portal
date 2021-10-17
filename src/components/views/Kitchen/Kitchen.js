import React from 'react';
import styles from './Kitchen.module.scss';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const demoOrder = [
  { orderId: 123,
    takeAway: false,
    tableId: 2,
    products: [
      {id: 'cake',
        name: 'Doughnut',
        amount: 2,
        params: [],
      },
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 2,
        params: [
          {
            label: 'Coffee',
            options: ['Latte'],
          },
        ],
      },
    ],
  },
  { orderId: 234,
    takeAway: true,
    tableId: '',
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 1,
        params: [
          {
            label: 'Coffee',
            options: ['Espresso'],
          },
        ],
      },
      {id: 'salad',
        name: 'Salad',
        amount: 1,
        params: [
          {
            label: 'Ingredients',
            options: ['Cucumber', 'Tomatoes', 'Olives', 'Onion'],
          },
        ],
      },
    ],
  },
  { orderId: 345,
    takeAway: false,
    tableId: 5,
    products: [
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        params: [
          {
            label: 'Sauce',
            options: ['Cezar'],
          },
          {
            label: 'Toppings',
            options: ['Olives', 'Red Peppers', 'Mushrooms', 'Fresh Bazil', 'Salami'],
          },
          {
            label: 'Crust',
            options: ['Thick'],
          },
        ],
      },
    ],
  },
  { orderId: 456,
    takeAway: false,
    tableId: 1,
    products: [
      {id: 'breakfast',
        name: 'Breakfast',
        amount: 3,
        params: [
          {
            label: 'Coffee',
            options: ['Latte'],
          },
        ],
      },
      {id: 'pizza',
        name: 'Pizza',
        amount: 1,
        params: [
          {
            label: 'Sauce',
            options: ['Tomato'],
          },
          {
            label: 'Toppings',
            options: ['Red Peppers', 'Mushrooms', 'Onion', 'Fresh Bazil', 'Salami'],
          },
          {
            label: 'Crust',
            options: ['Standard'],
          },
        ],
      },
    ],
  },
];

const Kitchen = () => {
  return (
    <Container className={styles.component}>
      <h2>Kitchen view</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order number</th>
            <th>Table</th>
            <th>Products</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {demoOrder.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.takeAway ? 'Take away' : order.tableId}</td>
              <td>
                {order.products.map(product => (
                  <div className={styles.product} key={product.id}>
                    <div>
                      <p>Quantity: {product.amount}</p>
                    </div>
                    <div>
                      <p>{product.name === 'Breakfast' ? '' : product.name}</p>
                    </div>
                    <div>
                      {product.params.map((param, index) => (
                        <div key={index}>
                          <p>{param.label}: {param.options.join(', ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </td>
              <td>
                <Button>Mark as prepared</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Kitchen;
