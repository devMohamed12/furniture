import { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabase";

export const useFetchApi = (initialConfig = {}) => {


  const fetchData = useCallback(
    async ({
      table = "products2",
      select = "*",
      ilikeField = "",
      ilikeValue = "",
    } = initialConfig) => {
        const [loading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      const [error, setError] = useState(null);
      setLoading(true);
      try {
        const query = supabase.from(table).select(select);

        if (ilikeField && ilikeValue) {
          query.ilike(ilikeField, ilikeValue);
        }

        const { data, error } = await query;

        if (error) {
          setError(error.message);
        } else {
          setData(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [initialConfig]
  );

  return {  fetchData };
};
