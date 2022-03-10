# json.partial! "api/channels/channel", channel: @channel

json.key_format! camelize: :lower
json.extract! @channel, :id, :channel_name, :server_id
# debugger