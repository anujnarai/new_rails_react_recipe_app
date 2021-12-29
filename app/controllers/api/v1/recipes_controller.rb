class Api::V1::RecipesController < ApplicationController
  def index
    recipe = Recipe.all.order(created_at: :desc)
    render json: recipe
  end
  def create
  end

  def show
    if recipe
      render json: recipe
    else
      render json: recipe.errors.full_messages
    end
  end

  def destroy
  end

  private
  def recipe 
    @recipe ||= Recipe.find(params[:id])
  end
end
