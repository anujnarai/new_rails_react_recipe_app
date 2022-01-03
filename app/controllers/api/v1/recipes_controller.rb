class Api::V1::RecipesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    recipe = Recipe.all.order(created_at: :desc)
    render json: recipe
  end
  def create
   recipe_params = params[:body]
   recipe = Recipe.create!(name: recipe_params[:name], ingredients: recipe_params[:ingredients], instruction: recipe_params[:instruction])
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    if recipe
      render json: recipe
    else
      render json: recipe.errors.full_messages
    end
  end

  def destroy
    recipe.destroy unless recipe.nil?
    render json: {message: 'Recipe deleted!'}
  end

  private

  def recipe 
    @recipe ||= Recipe.find(params[:id])
  end
end
