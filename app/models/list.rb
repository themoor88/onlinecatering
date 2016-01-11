# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ActiveRecord::Base
  validates :email, presence: true
end
