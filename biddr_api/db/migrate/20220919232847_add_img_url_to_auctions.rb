class AddImgUrlToAuctions < ActiveRecord::Migration[7.0]
  def change
     add_column :auctions, :img_url, :text, default: "https://archive.org/download/no-photo-available/no-photo-available.png"
  end
end
