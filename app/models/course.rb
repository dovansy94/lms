class Course < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :description, length: {minimum: 20, maximum: 200}, allow_blank: true

  has_many :Course_students
  has_many :students, class_name: "Account", through: :Course_students
end
