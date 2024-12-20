import { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const useFetchProducts = (params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { filter, limit, order } = params;

        let query = supabase.from("products2").select("*");

        if (filter) {
          query = query.eq(filter.column, filter.value);
        }

        if (limit) {
          query = query.limit(limit);
        }

        if (order) {
          query = query.order(order.column, { ascending: order.ascending });
        }

        const { data, error } = await query;

        if (error) {
          throw error;
        }

        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [params]); // Re-run when params change

  return { data, isLoading, error };
};

export default useFetchProducts;
