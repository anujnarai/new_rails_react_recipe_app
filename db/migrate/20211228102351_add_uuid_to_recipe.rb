class AddUuidToRecipe < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'pgcrypto'
    add_column :recipes, :uuid, :uuid, default: "gen_random_uuid()", null: false
  end
end
