'use client'; // Mark this component as client-side rendered
import { useEffect, useState } from 'react';
import { GET_COUNTRIES_WITH_USD } from '../../queries/countries';
import client from '../../utils/apolloClient';
import styles from '../page.module.css';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await client.query({ query: GET_COUNTRIES_WITH_USD });
        setCountries(data.countries);
      } catch (err) {
        setError('Failed to fetch countries. Please try again later.');
      }
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Countries with USD Currency</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {countries.map((country, index) => (
          <li key={index} className={styles.countryCard}>
            <h2>{country.name}</h2>
            <p><strong>Code:</strong> {country.code}</p>
            <p><strong>Official Language:</strong> {country.languages[0]?.name || 'N/A'}</p>
            <p><strong>Continent:</strong> {country.continent.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}