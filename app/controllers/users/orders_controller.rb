class Users::OrdersController < ApplicationController
  before_action :set_users_order, only: [:show, :edit, :update, :destroy]

  # GET /users/orders
  # GET /users/orders.json
  def index
    @users_orders = Order.all
  end

  # GET /users/orders/1
  # GET /users/orders/1.json
  def show
  end

  # GET /users/orders/new
  def new
    @users_order = Order.new
  end

  # GET /users/orders/1/edit
  def edit
  end

  # POST /users/orders
  # POST /users/orders.json
  def create
    @users_order = Order.new(users_order_params)

    respond_to do |format|
      if @users_order.save
        format.html { redirect_to @users_order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @users_order }
      else
        format.html { render :new }
        format.json { render json: @users_order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/orders/1
  # PATCH/PUT /users/orders/1.json
  def update
    respond_to do |format|
      if @users_order.update(users_order_params)
        format.html { redirect_to @users_order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @users_order }
      else
        format.html { render :edit }
        format.json { render json: @users_order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/orders/1
  # DELETE /users/orders/1.json
  def destroy
    @users_order.destroy
    respond_to do |format|
      format.html { redirect_to users_orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_users_order
      @users_order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def users_order_params
      params[:users_order]
    end
end
