json.array!(@users_orders) do |users_order|
  json.extract! users_order, :id
  json.url users_order_url(users_order, format: :json)
end
